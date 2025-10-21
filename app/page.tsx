'use client';

import { useState } from 'react';
import { Calculator, Ruler, ArrowRight } from 'lucide-react';

export default function RadiusCalculator() {
  const [inputType, setInputType] = useState<'diameter' | 'circumference' | 'area'>('diameter');
  const [diameter, setDiameter] = useState<string>('10');
  const [circumference, setCircumference] = useState<string>('');
  const [area, setArea] = useState<string>('');

  const calculateRadius = () => {
    const PI = 3.14159;
    
    if (inputType === 'diameter') {
      const d = parseFloat(diameter) || 0;
      const r = d / 2;
      return {
        radius: r.toFixed(2),
        diameter: d.toFixed(2),
        circumference: (2 * PI * r).toFixed(2),
        area: (PI * r * r).toFixed(2),
        formula: `r = d / 2 = ${d} / 2`,
      };
    } else if (inputType === 'circumference') {
      const c = parseFloat(circumference) || 0;
      const r = c / (2 * PI);
      return {
        radius: r.toFixed(2),
        diameter: (r * 2).toFixed(2),
        circumference: c.toFixed(2),
        area: (PI * r * r).toFixed(2),
        formula: `r = C / (2π) = ${c} / (2 × ${PI.toFixed(5)})`,
      };
    } else {
      const a = parseFloat(area) || 0;
      const r = Math.sqrt(a / PI);
      return {
        radius: r.toFixed(2),
        diameter: (r * 2).toFixed(2),
        circumference: (2 * PI * r).toFixed(2),
        area: a.toFixed(2),
        formula: `r = √(A / π) = √(${a} / ${PI.toFixed(5)})`,
      };
    }
  };

  const result = calculateRadius();

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-rose-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Radius of a Circle Calculator",
            "description": "Calculate the radius of a circle from diameter, circumference, or area with instant results",
            "url": "https://radiusofacircle.com",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How to find the radius of a circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are three main ways to find the radius of a circle: (1) Divide the diameter by 2 (r = d/2), (2) Divide the circumference by 2π (r = C/2π), or (3) Take the square root of the area divided by π (r = √(A/π)). Use our calculator above to instantly find the radius using any of these methods."
                }
              },
              {
                "@type": "Question",
                "name": "What is the radius of a circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The radius of a circle is the straight-line distance from the center point to any location on the circle's circumference. It's the most fundamental measurement in circle geometry and is always the same distance, no matter which point on the edge you measure to."
                }
              },
              {
                "@type": "Question",
                "name": "How to find radius of a circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can find the radius using the circumference (r = C / 2π), the area (r = √(A/π)), or the diameter (r = d / 2). The method depends on which measurement you have available. Our radius calculator handles all three methods instantly."
                }
              },
              {
                "@type": "Question",
                "name": "How to find the radius of a circle with the circumference?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To find the radius from circumference, use the formula r = C / (2π). Divide the circumference by 2 times pi (approximately 6.28318). For example, if circumference is 31.4 cm, then r = 31.4 / 6.28318 = 5 cm."
                }
              },
              {
                "@type": "Question",
                "name": "How to find the area of a circle with the radius?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To find the area of a circle with the radius, use the formula A = πr². Multiply π (approximately 3.14159) by the radius squared. For example, if radius is 5 cm, then A = 3.14159 × 5² = 3.14159 × 25 = 78.54 square cm."
                }
              },
              {
                "@type": "Question",
                "name": "How to find the radius of a circle with the area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To find the radius from area, use the formula r = √(A / π). Divide the area by π and take the square root of the result. For example, if area is 78.5 square cm, then r = √(78.5 / 3.14159) = √25 = 5 cm."
                }
              },
              {
                "@type": "Question",
                "name": "How do you find the radius of a circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can find the radius by using any known circle measurement: divide the diameter by 2, divide circumference by 2π, or take the square root of (area ÷ π). Choose the method that matches the information you have available."
                }
              },
              {
                "@type": "Question",
                "name": "Is radius half of diameter or circumference?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The radius is half the diameter, not half the circumference. The diameter goes straight across through the center, while the circumference goes all the way around. The circumference is about 6.28 times the radius."
                }
              },
              {
                "@type": "Question",
                "name": "What is the radius of a circle in simple terms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The radius is the distance from the center of a circle to any point on its edge. It's like a spoke on a bicycle wheel - the distance from the hub to the rim. Every radius in a circle is exactly the same length."
                }
              },
              {
                "@type": "Question",
                "name": "Can you find the radius from just the area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Use the formula r = √(A/π). Divide the area by π (approximately 3.14159), then take the square root of the result. For example, if the area is 50 square units, the radius is √(50/3.14159) = √15.92 ≈ 3.99 units."
                }
              },
              {
                "@type": "Question",
                "name": "What is the circumference of a circle with a radius of 4?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Using the formula C = 2πr: C = 2 × 3.14159 × 4 = 6.28318 × 4 ≈ 25.13 units. The circumference is always 2π times the radius."
                }
              },
              {
                "@type": "Question",
                "name": "What is the area of a circle with a radius of 5?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Using the formula A = πr²: A = 3.14159 × 5² = 3.14159 × 25 ≈ 78.54 square units. For any radius r, multiply 3.14159 by r squared to get the area."
                }
              },
              {
                "@type": "Question",
                "name": "How to calculate the radius of a circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To calculate the radius of a circle, you need at least one of these measurements: diameter, circumference, or area. Then apply the corresponding formula. Our calculator automates this process - just select which measurement you have and enter the value."
                }
              },
              {
                "@type": "Question",
                "name": "How to find center and radius of a circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If given a circle equation in the form (x - h)² + (y - k)² = r², the center is at point (h, k) and the radius is √r. If given a circle equation in general form (x² + y² + Dx + Ey + F = 0), complete the square to convert to standard form, then identify the center and radius."
                }
              },
              {
                "@type": "Question",
                "name": "Why is the radius important in circle formulas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The radius is the fundamental measurement of a circle. Both the area formula (A = πr²) and circumference formula (C = 2πr) use the radius. It's more useful than diameter in calculations because it represents the most basic property of a circle - the distance from center to edge."
                }
              },
              {
                "@type": "Question",
                "name": "How do you measure the radius of a physical circle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Find the center point by marking where two diameters intersect, then measure from the center to any point on the edge. Alternatively, measure the diameter across the widest part and divide by 2. For irregular circles, measure the circumference with a flexible measuring tape and calculate r = C / 2π."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to the radius if you double the area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you double the area, the radius increases by the square root of 2 (approximately 1.41 times). This is because area grows with the square of the radius (A = πr²). To double the area, multiply the radius by √2, not by 2."
                }
              },
              {
                "@type": "Question",
                "name": "Can a circle have more than one radius?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A circle has infinite radii (plural of radius) because you can draw a line from the center to any point on the circumference. However, all these radii have the same length. When we say 'the radius' of a circle, we mean this constant length value."
                }
              }
            ]
          })
        }}
      />

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Radius of a Circle Calculator
          </h1>
          <p className="text-xl text-orange-100 mb-6">
            Find the radius from diameter, circumference, or area instantly
          </p>
          <p className="text-orange-100 text-sm">
            Part of <a href="https://lab101.com" className="underline hover:text-white transition-colors">Explore more geometry tools on Lab101</a>
          </p>
        </div>
      </div>

      {/* Table of Contents - Sticky */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <details className="md:hidden">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Quick Navigation ▼
            </summary>
            <nav className="mt-3 space-y-2">
              <a href="#calculator" className="block text-sm text-gray-600 hover:text-orange-600">Calculator</a>
              <a href="#what-is-radius" className="block text-sm text-gray-600 hover:text-orange-600">What is Radius?</a>
              <a href="#formulas" className="block text-sm text-gray-600 hover:text-orange-600">Three Formulas</a>
              <a href="#examples" className="block text-sm text-gray-600 hover:text-orange-600">Examples</a>
              <a href="#applications" className="block text-sm text-gray-600 hover:text-orange-600">Applications</a>
              <a href="#faq" className="block text-sm text-gray-600 hover:text-orange-600">FAQ</a>
            </nav>
          </details>
          <nav className="hidden md:flex md:items-center md:justify-center md:space-x-8">
            <a href="#calculator" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Calculator</a>
            <a href="#what-is-radius" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">What is Radius?</a>
            <a href="#formulas" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Formulas</a>
            <a href="#examples" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Examples</a>
            <a href="#applications" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Applications</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div id="calculator" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-wrap gap-4 mb-8 border-b pb-4">
            <button
              onClick={() => setInputType('diameter')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                inputType === 'diameter'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              From Diameter
            </button>
            <button
              onClick={() => setInputType('circumference')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                inputType === 'circumference'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              From Circumference
            </button>
            <button
              onClick={() => setInputType('area')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                inputType === 'area'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              From Area
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-orange-600" />
                Input Value
              </h3>
              
              {inputType === 'diameter' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Diameter (d)
                  </label>
                  <input
                    type="number"
                    value={diameter}
                    onChange={(e) => setDiameter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                    placeholder="Enter diameter"
                  />
                  <p className="text-sm text-gray-500 mt-2">The distance across the circle through the center</p>
                </div>
              )}

              {inputType === 'circumference' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Circumference (C)
                  </label>
                  <input
                    type="number"
                    value={circumference}
                    onChange={(e) => setCircumference(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                    placeholder="Enter circumference"
                  />
                  <p className="text-sm text-gray-500 mt-2">The distance around the circle</p>
                </div>
              )}

              {inputType === 'area' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area (A)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                    placeholder="Enter area"
                  />
                  <p className="text-sm text-gray-500 mt-2">The space inside the circle</p>
                </div>
              )}

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                <p className="text-sm font-medium text-orange-800 mb-2">Formula Used:</p>
                <p className="font-mono text-orange-900">{result.formula}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-orange-600" />
                Results
              </h3>
              
              <div className="space-y-4">
                <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-sm font-medium mb-2">Radius</p>
                  <p className="text-4xl font-bold">{result.radius}</p>
                  <p className="text-orange-100 text-sm mt-1">units</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Diameter</p>
                    <p className="text-xl font-semibold text-gray-800">{result.diameter}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Circumference</p>
                    <p className="text-xl font-semibold text-gray-800">{result.circumference}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Area</p>
                    <p className="text-xl font-semibold text-gray-800">{result.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <article className="max-w-none">
            <h2 id="what-is-radius" className="text-3xl font-bold text-gray-900 mb-6">
              What is the Radius of a Circle? Definition & Formula
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The radius of a circle is the distance from the center point to any point on the circle&apos;s circumference. It is one of the most fundamental measurements in geometry and serves as the foundation for calculating all other circle properties. The radius is always constant for any given circle - no matter which point on the circumference you measure to, the distance from the center remains the same.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the radius is essential because it appears in nearly every circle formula. Whether you&apos;re calculating area, circumference, or working with circle equations in coordinate geometry, the radius is the key measurement that unlocks all other properties. The radius is typically denoted by the letter &apos;r&apos; in mathematical formulas and is measured in linear units such as centimeters, inches, meters, or feet.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Radius of a Circle Definition
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              A simple radius definition: the radius of a circle is a straight line drawn from the exact center of the circle to its edge. All radii of a given circle have the same length. The key property of the radius is that it remains constant throughout the circle—this is what makes a circle mathematically perfect and unique.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The radius is what a circle is fundamentally defined by. You cannot have a circle without a radius, and the radius completely determines the size of the circle. Once you know the radius, you can calculate every other property: the diameter (twice the radius), the circumference (2πr), and the area (πr²).
            </p>

            <h2 id="formulas" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How to Find the Radius of a Circle: Three Methods & Formulas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              There are three primary methods for calculating the radius of a circle, depending on which measurement you already know. Each method uses a specific formula derived from the fundamental relationships between circle properties. Our calculator above supports all three methods, allowing you to find the radius regardless of which measurement you have available.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 1: How to Find Radius from Diameter (r = d / 2)
            </h3>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6">
              <p className="text-lg font-semibold text-orange-900 mb-2">Formula:</p>
              <p className="text-2xl font-mono text-orange-800">r = d / 2</p>
              <p className="text-sm text-orange-700 mt-3">
                Where r is the radius and d is the diameter
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The diameter is the distance across the circle passing through the center - it&apos;s the longest possible straight line you can draw within a circle. The radius is exactly half the diameter, making this the simplest radius calculation. If you know the diameter is 20 cm, the radius is simply 20 ÷ 2 = 10 cm. Once you have the radius, you can <a href="https://areaofcircle.com" className="text-orange-600 hover:text-orange-800 font-medium underline">calculate area using the radius</a>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This relationship is fundamental: the diameter is always twice the radius (d = 2r), and conversely, the radius is always half the diameter (r = d/2). This is often the first method students learn because of its straightforward nature and because diameters are easy to measure physically - you simply measure across the widest part of the circle.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 2: How to Find Radius from Circumference (r = C / 2π)
            </h3>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
              <p className="text-lg font-semibold text-red-900 mb-2">Formula:</p>
              <p className="text-2xl font-mono text-red-800">r = C / (2π)</p>
              <p className="text-sm text-red-700 mt-3">
                Where r is the radius, C is the circumference, and π ≈ 3.14159
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The circumference is the distance around the circle - its perimeter. The circumference formula is C = 2πr, so to find the radius from circumference, we rearrange this formula to solve for r. If the circumference is 31.4 cm, the radius would be 31.4 ÷ (2 × 3.14159) = 5 cm. Learn how to <a href="https://circumferenceofacircle.com" className="text-red-600 hover:text-red-800 font-medium underline">find circumference from radius</a>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This method is particularly useful when you&apos;ve measured around a circular object (like wrapping a string around a pipe or wheel) but can&apos;t easily measure across it. The mathematical constant π (pi) represents the ratio of any circle&apos;s circumference to its diameter, approximately equal to 3.14159. This ratio is the same for every circle, regardless of size.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 3: How to Find Radius from Area (r = √(A / π))
            </h3>

            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 mb-6">
              <p className="text-lg font-semibold text-rose-900 mb-2">Formula:</p>
              <p className="text-2xl font-mono text-rose-800">r = √(A / π)</p>
              <p className="text-sm text-rose-700 mt-3">
                Where r is the radius, A is the area, and π ≈ 3.14159
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The area is the amount of space inside the circle. Since the area formula is A = πr², we can rearrange it to find the radius by dividing the area by π and taking the square root. If the area is 78.5 square cm, the radius would be √(78.5 ÷ 3.14159) = √25 = 5 cm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This method is essential when working with problems that give you the area first, such as finding the radius of a circular garden that covers 100 square meters, or determining the radius of a circular pizza that has 314 square inches of surface area. The square root operation ensures you get a linear measurement (the radius) from an area measurement.
            </p>

            <h2 id="examples" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step-by-Step Examples
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 mb-2">Example 1: Find radius from diameter</p>
              <p className="text-gray-700 mb-3">A circular table has a diameter of 48 inches. What is its radius?</p>
              <p className="text-sm text-gray-600 mb-2">Solution:</p>
              <p className="text-gray-700">Using the formula r = d / 2</p>
              <p className="text-gray-700">r = 48 / 2</p>
              <p className="text-gray-700 font-semibold">Answer: r = 24 inches</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 mb-2">Example 2: Find radius from circumference</p>
              <p className="text-gray-700 mb-3">A wheel has a circumference of 62.8 cm. What is its radius?</p>
              <p className="text-sm text-gray-600 mb-2">Solution:</p>
              <p className="text-gray-700">Using the formula r = C / (2π)</p>
              <p className="text-gray-700">r = 62.8 / (2 × 3.14159)</p>
              <p className="text-gray-700">r = 62.8 / 6.28318</p>
              <p className="text-gray-700 font-semibold">Answer: r = 10 cm</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 mb-2">Example 3: Find radius from area</p>
              <p className="text-gray-700 mb-3">A circular garden covers 314 square meters. What is its radius?</p>
              <p className="text-sm text-gray-600 mb-2">Solution:</p>
              <p className="text-gray-700">Using the formula r = √(A / π)</p>
              <p className="text-gray-700">r = √(314 / 3.14159)</p>
              <p className="text-gray-700">r = √100</p>
              <p className="text-gray-700 font-semibold">Answer: r = 10 meters</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 mb-2">Example 4: Real-world problem</p>
              <p className="text-gray-700 mb-3">A circular pond has a circumference of 94.2 feet. You want to install a fountain at the center that can spray water to the edge. How long should the spray reach?</p>
              <p className="text-sm text-gray-600 mb-2">Solution:</p>
              <p className="text-gray-700">The spray needs to reach the radius distance</p>
              <p className="text-gray-700">r = C / (2π) = 94.2 / (2 × 3.14159) = 94.2 / 6.28318</p>
              <p className="text-gray-700 font-semibold">Answer: The spray should reach 15 feet</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold text-gray-900 mb-2">Example 5: Working backwards</p>
              <p className="text-gray-700 mb-3">A circular logo has a radius of 7 cm. What are its diameter, circumference, and area?</p>
              <p className="text-sm text-gray-600 mb-2">Solution:</p>
              <p className="text-gray-700">Diameter: d = 2r = 2 × 7 = 14 cm</p>
              <p className="text-gray-700">Circumference: C = 2πr = 2 × 3.14159 × 7 = 43.98 cm</p>
              <p className="text-gray-700">Area: A = πr² = 3.14159 × 7² = 153.94 cm²</p>
              <p className="text-gray-700 font-semibold">Answer: d = 14 cm, C = 43.98 cm, A = 153.94 cm²</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              More Examples: Specific Radius Calculations with Numbers
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Here are additional examples showing how radius calculations work with specific numeric values. These help illustrate the practical application of each formula.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">What is the area of a circle with a radius of 5?</p>
                <p className="text-sm text-blue-800 mb-2">Using A = πr²:</p>
                <p className="text-blue-800">A = 3.14159 × 5²</p>
                <p className="text-blue-800">A = 3.14159 × 25</p>
                <p className="font-bold text-blue-900">A ≈ 78.54 square units</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">What is the circumference of a circle with a radius of 4?</p>
                <p className="text-sm text-green-800 mb-2">Using C = 2πr:</p>
                <p className="text-green-800">C = 2 × 3.14159 × 4</p>
                <p className="text-green-800">C = 6.28318 × 4</p>
                <p className="font-bold text-green-900">C ≈ 25.13 units</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-purple-900 mb-2">What is the area of a circle with a radius of 8?</p>
                <p className="text-sm text-purple-800 mb-2">Using A = πr²:</p>
                <p className="text-purple-800">A = 3.14159 × 8²</p>
                <p className="text-purple-800">A = 3.14159 × 64</p>
                <p className="font-bold text-purple-900">A ≈ 201.06 square units</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-900 mb-2">What is the circumference of a circle with a radius of 10?</p>
                <p className="text-sm text-indigo-800 mb-2">Using C = 2πr:</p>
                <p className="text-indigo-800">C = 2 × 3.14159 × 10</p>
                <p className="text-indigo-800">C = 6.28318 × 10</p>
                <p className="font-bold text-indigo-900">C ≈ 62.83 units</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-900 mb-2">What is the area of a circle with a radius of 3?</p>
                <p className="text-sm text-red-800 mb-2">Using A = πr²:</p>
                <p className="text-red-800">A = 3.14159 × 3²</p>
                <p className="text-red-800">A = 3.14159 × 9</p>
                <p className="font-bold text-red-900">A ≈ 28.27 square units</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-900 mb-2">What is the circumference with radius of 7?</p>
                <p className="text-sm text-amber-800 mb-2">Using C = 2πr:</p>
                <p className="text-amber-800">C = 2 × 3.14159 × 7</p>
                <p className="text-amber-800">C = 6.28318 × 7</p>
                <p className="font-bold text-amber-900">C ≈ 43.98 units</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Understanding Related Circle Measurements
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Radius vs Diameter
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              The radius and diameter are directly related - the diameter is always exactly twice the radius. Think of the diameter as two radii placed end-to-end, passing through the center. While you can draw infinite radii in a circle (from the center to any point on the circumference), there&apos;s only one diameter for any two opposite points, and the longest diameter passes through the center.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              In practical terms, diameters are often easier to measure physically (you can use a ruler across a circular object), but radii are more useful in calculations because most circle formulas are expressed in terms of the radius rather than the diameter.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Radius and Circumference
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              The circumference is always 2π times the radius, which means the circumference is approximately 6.28 times longer than the radius. This ratio is constant for every circle - double the radius and you double the circumference. This linear relationship makes it easy to scale circles up or down while maintaining their proportions. <a href="https://howtofindcircumferenceofacircle.com" className="text-red-600 hover:text-red-800 font-medium underline">Learn how to find circumference step-by-step</a> using your calculated radius.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Radius and Area
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The area has a squared relationship with the radius (A = πr²), which means if you double the radius, the area increases by a factor of four. This is because area is two-dimensional. A circle with a radius of 5 cm has an area of about 78.5 cm², but a circle with a radius of 10 cm has an area of about 314 cm² - four times as much, not twice as much. The radius is fundamental to <a href="https://equationofacircle.com" className="text-orange-600 hover:text-orange-800 font-medium underline">understanding how radius defines the equation of a circle</a> in coordinate geometry.
            </p>

            <h2 id="applications" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Real-World Applications of Radius Calculations
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Engineering and Construction
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Engineers constantly work with radius calculations when designing circular components. Wheel designers need to know the radius to calculate rim sizes, spoke lengths, and load distribution. Architects calculate radii when designing circular windows, domes, or curved walls. Even road engineers use radius calculations when designing highway curves - a larger radius means a gentler, safer curve. Understanding the <a href="https://circumferenceofacircleformula.com" className="text-red-600 hover:text-red-800 font-medium underline">formula linking radius and circumference</a> is essential for dimensional accuracy.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Manufacturing and Production
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Manufacturing circular products like pipes, cylinders, gears, and bearings requires precise radius calculations. If a manufacturer knows they need a pipe with a certain circumference (measured by wrapping), they can calculate the required radius to determine material needs. CNC machines use radius measurements to cut perfect circles in metal, wood, and plastic.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Landscaping and Agriculture
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Landscape designers use radius calculations to plan circular gardens, patios, or fountains. If you know you want a circular flower bed with an area of 50 square feet, calculating the radius tells you how far from the center point you need to mark the edge. Irrigation systems use radius calculations to determine coverage areas - a sprinkler with a 20-foot radius covers about 1,256 square feet. For soil and material calculations, <a href="https://densityformula.com" className="text-orange-600 hover:text-orange-800 font-medium underline">see how radius affects surface area and density</a> of circular plots.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Sports and Recreation
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Sports fields often feature circles: the center circle in soccer, the three-point arc in basketball, or the pitcher&apos;s mound in baseball. Understanding radius helps groundskeepers mark these areas accurately. Pool builders calculate radii for above-ground pools, and race track designers use radius calculations to plan curves that provide optimal racing conditions. For advanced geometric analysis, explore <a href="https://supplementaryangles.com" className="text-orange-600 hover:text-orange-800 font-medium underline">angle relationships in circle geometry</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Circle Equation & Coordinate Geometry: Radius in Advanced Math
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The radius plays a crucial role in coordinate geometry and algebraic expressions. Understanding how radius relates to the equation of a circle is essential for advanced mathematics, physics, and engineering applications.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Standard Form of Circle Equation
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              The standard equation of a circle with center at point (h, k) and radius r is:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <p className="text-lg font-mono text-blue-800">(x - h)² + (y - k)² = r²</p>
              <p className="text-sm text-blue-700 mt-3">Where (h, k) is the center point and r is the radius</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              This equation represents all points on the circle. Every point (x, y) that satisfies this equation lies exactly on the circle. The radius r is squared in this formula, which is why the radius must be a positive number.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Finding Radius from Circle Equation
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you&apos;re given a circle equation in standard form, finding the radius is simple: take the square root of the right side of the equation. For example:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-800 mb-3">Example: Find the radius of the circle (x - 3)² + (y + 2)² = 25</p>
              <p className="text-gray-700">The equation is already in standard form: (x - h)² + (y - k)² = r²</p>
              <p className="text-gray-700">Comparing: r² = 25</p>
              <p className="text-gray-700">Therefore: r = √25 = 5</p>
              <p className="text-gray-700 font-semibold">The center is at (3, -2) and the radius is 5 units.</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Converting General Form to Standard Form
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes circle equations are given in general form: x² + y² + Dx + Ey + F = 0
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              To find the radius from the general form, you can convert to standard form by completing the square. The radius formula for general form is:
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-6">
              <p className="text-lg font-mono text-indigo-800">r = √(D²/4 + E²/4 - F)</p>
              <p className="text-sm text-indigo-700 mt-3">This gives the radius directly from general form coefficients</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-800 mb-3">Example: Find the radius of x² + y² + 6x - 8y - 11 = 0</p>
              <p className="text-gray-700">Here: D = 6, E = -8, F = -11</p>
              <p className="text-gray-700">r = √(36/4 + 64/4 + 11)</p>
              <p className="text-gray-700">r = √(9 + 16 + 11)</p>
              <p className="text-gray-700">r = √36 = 6</p>
              <p className="text-gray-700 font-semibold">The radius is 6 units.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Mistakes When Finding Radius
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Confusing Radius and Diameter
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              The most common error is using the diameter when the radius is needed, or vice versa. Remember: the radius is always half the diameter. If a problem asks for radius and you measure across the circle (diameter), you must divide by 2. Double-check which measurement a problem is asking for before calculating.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Forgetting to Take the Square Root
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              When finding radius from area, students often forget the square root step. The area formula is A = πr², so to solve for r, you must take the square root of both sides: r = √(A/π). Without the square root, your answer will be r² (radius squared), not the actual radius.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Incorrect Units
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Always maintain consistent units. If you&apos;re given a circumference in meters, your radius will be in meters too. If you&apos;re given an area in square feet, your radius will be in feet (not square feet, since radius is a linear measurement). When working with area, remember that the units are squared - an area of 100 cm² gives a radius in cm, not cm².
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Using the Wrong Value for π
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              While 3.14 is a common approximation for π, using more decimal places (3.14159) gives more accurate results. For most practical purposes, using the π button on a calculator is best. Some textbooks use 22/7 as an approximation, but 3.14159 is more accurate. The level of precision you need depends on your application - a carpenter might round to 3.14, while an aerospace engineer would use many more decimal places.
            </p>

            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Frequently Asked Questions About Circle Radius
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Get answers to the most common questions about finding and calculating the radius of a circle. These frequently asked questions address the most searched queries and common confusion points about radius calculations.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How to find the radius of a circle?</p>
                <p className="text-gray-700">There are three main ways to find the radius of a circle depending on what information you have: (1) From diameter: r = d/2 (7,700/mo searches), (2) From circumference: r = C/2π (3,900/mo searches), or (3) From area: r = √(A/π) (2,600/mo searches). Use our calculator above to instantly find the radius using any of these methods. Simply enter the measurement you have available, and the radius will be calculated automatically along with all related values.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the radius of a circle?</p>
                <p className="text-gray-700">The radius of a circle is the straight-line distance from the center point to any location on the circle&apos;s circumference. It&apos;s the most fundamental measurement in circle geometry. The word &quot;radius&quot; comes from Latin and literally means &quot;spoke of a wheel.&quot; For any given circle, the radius is always the same distance (5,800/mo searches for this definition), no matter which point on the edge you measure to. This constant property is what makes a circle mathematically perfect.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How to find the radius of a circle with the circumference?</p>
                <p className="text-gray-700">To find the radius from circumference (3,900/mo searches), use the formula r = C / (2π). Divide the circumference by 2 times pi (approximately 6.28318). For example, if the circumference is 31.4 cm, then r = 31.4 / 6.28318 = 5 cm. This is one of the most practical methods because circumference is easy to measure by wrapping a string around a circular object.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How to find the area of a circle with the radius?</p>
                <p className="text-gray-700">To find the area of a circle with the radius (2,800/mo searches), use the formula A = πr². Multiply π (approximately 3.14159) by the radius squared. For example, if radius is 5 cm, then A = 3.14159 × 5² = 3.14159 × 25 = 78.54 square cm. The area tells you the total space enclosed within the circle.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How to find the radius of a circle with the area?</p>
                <p className="text-gray-700">To find the radius from area (2,600/mo searches), use the formula r = √(A / π). Divide the area by π and take the square root of the result. For example, if area is 78.5 square cm, then r = √(78.5 / 3.14159) = √25 = 5 cm. This method is essential when you know how much space is inside a circle but need to find its size.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How do you find the radius of a circle?</p>
                <p className="text-gray-700">You can find the radius by using any known circle measurement (2,500/mo searches): divide the diameter by 2, divide circumference by 2π, or take the square root of (area ÷ π). Choose the method that matches the information you have available. Our calculator supports all three approaches instantly.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Is radius half of diameter or circumference?</p>
                <p className="text-gray-700">The radius is half the diameter, not half the circumference. The diameter goes straight across through the center, while the circumference goes all the way around. The circumference is about 6.28 times the radius, not 2 times. This is one of the most common misconceptions about circle geometry.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the radius of a circle in simple terms?</p>
                <p className="text-gray-700">The radius is the distance from the center of a circle to any point on its edge. It&apos;s like a spoke on a bicycle wheel - the distance from the hub to the rim. Every radius in a circle is exactly the same length, which is what gives a circle its perfect, symmetrical shape.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How to find center and radius of a circle?</p>
                <p className="text-gray-700">If given a circle equation in the form (x - h)² + (y - k)² = r², the center is at point (h, k) and the radius is √r. This common algebra problem (1,200/mo searches) appears frequently in coordinate geometry. If given a circle equation in general form, you may need to complete the square first to find the center and radius.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How to calculate the radius of a circle?</p>
                <p className="text-gray-700">To calculate the radius of a circle (480/mo searches), you need at least one of these measurements: diameter, circumference, or area. Then apply the corresponding formula. Our calculator automates this calculation—just select which measurement you have and enter the value. The radius will be instantly calculated along with related measurements like diameter, circumference, and area.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Why is the radius important in circle formulas?</p>
                <p className="text-gray-700">The radius is the fundamental measurement of a circle. Both the area formula (A = πr²) and circumference formula (C = 2πr) use the radius. It&apos;s more useful than diameter in calculations because it represents the most basic property of a circle - the distance from center to edge. Understanding the radius is essential for all circle-related mathematics.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can you find the radius from just the area?</p>
                <p className="text-gray-700">Yes! Use the formula r = √(A/π) (480/mo searches). Divide the area by π (approximately 3.14159), then take the square root of the result. For example, if the area is 50 square units, the radius is √(50/3.14159) = √15.92 ≈ 3.99 units. This is one of the three primary methods for finding radius.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the circumference of a circle with a radius of 4?</p>
                <p className="text-gray-700">Using the formula C = 2πr (660/mo searches): C = 2 × 3.14159 × 4 = 6.28318 × 4 ≈ 25.13 units. The circumference is always 2π times the radius. If you change the radius, you proportionally change the circumference by the same factor.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the area of a circle with a radius of 5?</p>
                <p className="text-gray-700">Using the formula A = πr²: A = 3.14159 × 5² = 3.14159 × 25 ≈ 78.54 square units (570/mo searches). For any radius r, multiply 3.14159 by r squared to get the area. Note that area increases as the square of the radius, so doubling the radius quadruples the area.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How do you measure the radius of a physical circle?</p>
                <p className="text-gray-700">Find the center point by marking where two diameters intersect, then measure from the center to any point on the edge. Alternatively, measure the diameter across the widest part and divide by 2. For irregular circles, measure the circumference with a flexible measuring tape and calculate r = C / 2π. This practical application appears in engineering (480/mo searches).</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What happens to the radius if you double the area?</p>
                <p className="text-gray-700">If you double the area, the radius increases by the square root of 2 (approximately 1.41 times). This is because area grows with the square of the radius (A = πr²). To double the area, multiply the radius by √2, not by 2. This relationship helps you understand how radius and area scale together.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can a circle have more than one radius?</p>
                <p className="text-gray-700">A circle has infinite radii (plural of radius) because you can draw a line from the center to any point on the circumference. However, all these radii have the same length. When we say &quot;the radius&quot; of a circle, we mean this constant length value. This fundamental property is what makes a circle unique among geometric shapes.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding how to find the radius of a circle is a fundamental skill in mathematics and has countless practical applications. Whether you&apos;re working from diameter, circumference, or area, each method provides a straightforward path to calculating this essential measurement. The radius serves as the foundation for all other circle calculations and appears in formulas across geometry, trigonometry, and calculus.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Use our calculator above to quickly find the radius from any known measurement, or use the formulas provided to calculate by hand. Remember that the radius is half the diameter (r = d/2), can be found from circumference (r = C/2π), or calculated from area (r = √(A/π)). Master these three methods and you&apos;ll be equipped to solve any circle problem that comes your way.
            </p>
          </article>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-orange-600" />
            Related Circle Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://circumferenceofacircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Circumference Calculator</h3>
              <p className="text-sm text-gray-600">Calculate circle circumference using C = 2πr</p>
            </a>
            <a href="https://areaofcircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Area Calculator</h3>
              <p className="text-sm text-gray-600">Find circle area using A = πr²</p>
            </a>
            <a href="https://equationofacircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Circle Equation</h3>
              <p className="text-sm text-gray-600">Understand circle equations in coordinate geometry</p>
            </a>
          </div>
          <div className="mt-6 p-4 bg-white bg-opacity-60 rounded-lg border border-orange-200">
            <p className="text-sm text-gray-700">
              Visual references: <a href="https://circlepng.com" className="text-orange-600 hover:text-orange-800 font-medium underline">Download circle diagrams showing radius and area</a>
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 py-10">

    {/* Simple Three Column */}
    <div className="grid md:grid-cols-3 gap-8 mb-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Circle Calculators Suite</h3>
        <div className="space-y-3">
          <a href="https://circumferenceofacircle.com"
             className="flex items-start group">
            <span className="text-blue-600 group-hover:text-blue-800 font-medium">
              Circumference Calculator →
            </span>
          </a>
          <p className="text-sm text-gray-600 -mt-2 ml-2">
            Primary tool for finding perimeter (C = 2πr)
          </p>

          <a href="https://areaofcircle.com"
             className="text-blue-600 hover:text-blue-800 text-sm">
            Area Calculator (A = πr²)
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">About Radius Calculator</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Find the radius from circumference, area, or diameter. Used by engineers,
          students, and designers for precise circular measurements.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">More from Our Network</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <a href="https://lab101.com" className="text-orange-600 hover:text-orange-800 font-medium underline">
            Explore more geometry tools on Lab101
          </a>
        </p>
        <p className="text-xs text-gray-500">
          Part of a comprehensive suite of educational math tools and calculators.
        </p>
      </div>
    </div>

    <div className="text-center text-xs text-gray-400 pt-4 border-t border-gray-200">
      RadiusOfACircle.com - Geometry Education Resource - © 2025
    </div>
  </div>
</footer>
    </main>
  );
}