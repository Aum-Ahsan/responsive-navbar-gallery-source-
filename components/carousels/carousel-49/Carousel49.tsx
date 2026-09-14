// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Plane, Clock, Luggage, Check, Armchair, QrCode } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const FLIGHTS = [
  {
    id: "fl-101",
    airline: "Singapore Airlines",
    flightNo: "SQ 24",
    origin: { code: "SIN", city: "Singapore", time: "23:45", terminal: "T3" },
    destination: { code: "JFK", city: "New York", time: "07:10 +1", terminal: "T4" },
    duration: "18h 25m",
    type: "Nonstop • World's Longest",
    price: "$1,480",
    class: "Premium Economy",
    color: "border-amber-400 bg-amber-50 text-amber-950",
  },
  {
    id: "fl-204",
    airline: "All Nippon Airways",
    flightNo: "NH 107",
    origin: { code: "SFO", city: "San Francisco", time: "11:20", terminal: "Intl" },
    destination: { code: "HND", city: "Tokyo Haneda", time: "15:30 +1", terminal: "T2" },
    duration: "11h 10m",
    type: "Nonstop • Dreamliner 787",
    price: "$980",
    class: "The Room Business",
    color: "border-blue-400 bg-blue-50 text-blue-950",
  },
  {
    id: "fl-309",
    airline: "Emirates",
    flightNo: "EK 202",
    origin: { code: "DXB", city: "Dubai", time: "08:30", terminal: "T3" },
    destination: { code: "LHR", city: "London Heathrow", time: "13:05", terminal: "T3" },
    duration: "7h 35m",
    type: "Nonstop • Airbus A380",
    price: "$740",
    class: "Upper Deck Economy",
    color: "border-emerald-400 bg-emerald-50 text-emerald-950",
  },
  {
    id: "fl-412",
    airline: "Air France",
    flightNo: "AF 066",
    origin: { code: "CDG", city: "Paris", time: "10:15", terminal: "2E" },
    destination: { code: "LAX", city: "Los Angeles", time: "13:20", terminal: "TBO" },
    duration: "12h 05m",
    type: "Nonstop • A350-900",
    price: "$890",
    class: "Economy Flex",
    color: "border-rose-400 bg-rose-50 text-rose-950",
  },
];

export default function Carousel49() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [seatSelected, setSeatSelected] = useState<Record<string, string>>({
    "fl-101": "14A",
    "fl-204": "3K",
    "fl-309": "22C",
    "fl-412": "18B",
  });

  const pickSeat = (id: string, seat: string) => {
    setSeatSelected((prev) => ({ ...prev, [id]: seat }));
  };

  return (
    <CarouselShell
      name="Flight Route & Boarding Pass Scroller"
      index={49}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Boarding pass design • Seat selection
          </span>
          <button
            onClick={() => api?.scrollPrev()}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Previous flight"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Next flight"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#f4f3ef] border border-stone-300 rounded-[2rem] p-6 sm:p-8 shadow-sm">
        <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-stone-300/80">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-stone-500">
              BOARDING PASS HUB
            </span>
            <h3 className="text-2xl font-black text-stone-900 tracking-tight mt-0.5">
              Confirmed Itineraries &amp; Passes
            </h3>
          </div>

          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            ✓ 4 Flights Scheduled
          </span>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-6">
            {FLIGHTS.map((flight) => {
              const currentSeat = seatSelected[flight.id] || "14A";

              return (
                <div
                  key={flight.id}
                  className="flex-[0_0_92%] sm:flex-[0_0_72%] md:flex-[0_0_55%] lg:flex-[0_0_46%] min-w-0"
                >
                  {/* Physical Boarding Pass Ticket Container */}
                  <div className="bg-white rounded-3xl border-2 border-stone-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                    {/* Top Ticket Header */}
                    <div className="p-5 sm:p-6 bg-stone-900 text-white flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
                          {flight.airline}
                        </span>
                        <h4 className="text-base font-bold text-white leading-tight">{flight.flightNo}</h4>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-stone-400 uppercase">CABIN CLASS</span>
                        <p className="text-xs font-bold text-amber-300">{flight.class}</p>
                      </div>
                    </div>

                    {/* Flight Path Graphic */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        {/* Origin */}
                        <div>
                          <p className="text-3xl font-black text-stone-900 font-mono tracking-tighter">
                            {flight.origin.code}
                          </p>
                          <p className="text-xs text-stone-500 font-semibold">{flight.origin.city}</p>
                          <p className="text-sm font-black text-stone-800 mt-1">{flight.origin.time}</p>
                        </div>

                        {/* Mid Trajectory Line */}
                        <div className="flex-1 flex flex-col items-center px-3">
                          <span className="text-[10px] font-mono text-stone-400 font-bold mb-1">
                            {flight.duration}
                          </span>
                          <div className="w-full flex items-center relative">
                            <div className="w-full h-0.5 bg-stone-300" />
                            <Plane size={16} className="text-stone-700 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                          </div>
                          <span className="text-[9px] font-bold text-emerald-600 mt-1.5">{flight.type}</span>
                        </div>

                        {/* Destination */}
                        <div className="text-right">
                          <p className="text-3xl font-black text-stone-900 font-mono tracking-tighter">
                            {flight.destination.code}
                          </p>
                          <p className="text-xs text-stone-500 font-semibold">{flight.destination.city}</p>
                          <p className="text-sm font-black text-stone-800 mt-1">{flight.destination.time}</p>
                        </div>
                      </div>

                      {/* Seat Selector Simulation */}
                      <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Armchair size={16} className="text-stone-600" />
                          <span className="text-xs font-bold text-stone-700">Assigned Seat:</span>
                          <span className="text-xs font-mono font-black text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-300">
                            {currentSeat}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-mono">
                          {["Window", "Aisle"].map((seatType, sIdx) => {
                            const num = sIdx === 0 ? "14A" : "14C";
                            return (
                              <button
                                key={seatType}
                                onClick={() => pickSeat(flight.id, num)}
                                className={`px-2 py-1 rounded text-[10px] font-bold transition ${
                                  currentSeat === num
                                    ? "bg-stone-900 text-white shadow"
                                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                                }`}
                              >
                                {seatType}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Perforated Stub Tear Line */}
                    <div className="relative border-t-2 border-dashed border-stone-300 p-5 bg-stone-50/80 flex items-center justify-between">
                      {/* Left & Right Notch Cutouts */}
                      <div className="absolute -top-3.5 -left-3.5 w-6 h-6 rounded-full bg-[#f4f3ef] border-r-2 border-stone-300" />
                      <div className="absolute -top-3.5 -right-3.5 w-6 h-6 rounded-full bg-[#f4f3ef] border-l-2 border-stone-300" />

                      <div>
                        <p className="text-[10px] font-mono text-stone-400">TOTAL FARE</p>
                        <p className="text-xl font-black text-stone-900">{flight.price}</p>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-stone-600">
                        <QrCode size={30} className="text-stone-800" />
                        <div className="text-right">
                          <span className="text-[10px] block font-bold text-stone-400">GATE</span>
                          <span className="font-black text-stone-900">B24</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CarouselShell>
  );
}
