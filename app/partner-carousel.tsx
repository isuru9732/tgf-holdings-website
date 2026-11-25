"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";

export type PartnerBrand = readonly [name: string, src: string, dark?: boolean];

export function PartnerCarousel({
  brands,
  variant = "partners",
}: {
  brands: readonly PartnerBrand[];
  variant?: "partners" | "clients";
}) {
  const isClients = variant === "clients";

  // Build clean, full 6-card slides
  const slides = useMemo(() => {
    if (isClients || !brands || brands.length === 0) return [];

    const chunkSize = 6;
    const result: PartnerBrand[][] = [];

    for (let i = 0; i < brands.length; i += chunkSize) {
      const chunk = brands.slice(i, i + chunkSize) as PartnerBrand[];
      // If the last chunk has fewer than 6, backfill from the beginning so every slide is a full 6-card row
      if (chunk.length < chunkSize && brands.length >= chunkSize) {
        const needed = chunkSize - chunk.length;
        const padded = [...chunk, ...brands.slice(0, needed)] as PartnerBrand[];
        result.push(padded);
      } else {
        result.push(chunk);
      }
    }
    return result;
  }, [brands, isClients]);

  const clientSlides = useMemo(() => {
    if (!isClients || !brands || brands.length === 0) return [];

    const chunkSize = 16;
    const result: PartnerBrand[][] = [];
    for (let i = 0; i < brands.length; i += chunkSize) {
      const chunk = brands.slice(i, i + chunkSize) as PartnerBrand[];
      if (chunk.length < chunkSize && brands.length >= chunkSize) {
        result.push([...chunk, ...brands.slice(0, chunkSize - chunk.length)] as PartnerBrand[]);
      } else {
        result.push(chunk);
      }
    }
    return result;
  }, [brands, isClients]);

  const newlyAddedClients = useMemo(
    () => new Set(brands.slice(8, 21).map(([name]) => name)),
    [brands],
  );

  const [active, setActive] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [clientPaused, setClientPaused] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Navigate to slide and briefly pause auto-slide so user can inspect what they clicked
  const goToSlide = useCallback((index: number) => {
    setActive(index);
    setUserInteracted(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setUserInteracted(false);
    }, 6000);
  }, []);

  // Smooth auto-slide timer - restarts cleanly on every active change
  useEffect(() => {
    if (isClients || userInteracted || slides.length < 2) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isClients, userInteracted, slides.length, active]);

  useEffect(() => {
    if (!isClients || clientPaused || clientSlides.length < 2) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % clientSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isClients, clientPaused, clientSlides.length]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        // Swipe left -> next slide
        goToSlide((active + 1) % slides.length);
      } else {
        // Swipe right -> prev slide
        goToSlide((active - 1 + slides.length) % slides.length);
      }
    }
  };

  if (isClients) {
    const visibleClients = clientSlides[active] ?? clientSlides[0] ?? [];
    const extraLargeClients = new Set(["Sofia Colombo City Hotel", "Bally's Entertainment Sri Lanka", "Marino Beach Hotel Colombo", "CIC Nurturing Life"]);
    return (
      <div className="client-static-showcase" aria-label="Trusted by leading brands" onMouseEnter={() => setClientPaused(true)} onMouseLeave={() => setClientPaused(false)}>
        <div className="client-static-grid">
          {visibleClients.map(([name, src], index) => (
            <div className={name === "Crystal Sands" ? "client-static-card client-static-card--crystal-sands" : `client-static-card${newlyAddedClients.has(name) ? " client-static-card--new-client" : ""}${extraLargeClients.has(name) ? " client-static-card--extra-large" : ""}`} key={index} title={name}>
              {name === "Crystal Sands" ? <span className="crystal-sands-logo client-logo-stage" key={`${active}-${name}-${index}`} role="img" aria-label={name}><strong>Crystal Sands</strong><i/><small>Villas in the Sky</small></span> : <img className="client-logo-stage" key={`${active}-${name}-${index}`} src={src} alt={name} loading="lazy" decoding="async" />}
            </div>
          ))}
        </div>
        <div className="client-rotation-status" aria-hidden="true">{clientSlides.map((_, index) => <span className={index === active ? "active" : ""} key={index}/>)}</div>
      </div>
    );
  }

  const slideCount = slides.length || 1;
  const slideWidthPct = 100 / slideCount;
  const trackTranslatePct = (active * 100) / slideCount;

  return (
    <div
      className="partner-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Our partner brands showcase"
    >
      <div className="partner-carousel-viewport">
        <div
          className="partner-carousel-track"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${trackTranslatePct}%)`,
          }}
        >
          {slides.map((slideBrands, slideIdx) => (
            <div
              className="partner-carousel-slide"
              key={slideIdx}
              style={{ width: `${slideWidthPct}%` }}
              aria-hidden={slideIdx !== active}
            >
              <div className="partner-logo-row">
                {slideBrands.map(([name, src, dark], itemIdx) => (
                  <div
                    className={dark ? "partner-logo-card logo-on-dark" : "partner-logo-card"}
                    key={`${name}-${itemIdx}`}
                    title={name}
                  >
                    <img src={src} alt={name} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partner-carousel-controls" aria-label="Partner brand slide pagination">
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={index === active ? "active" : ""}
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
