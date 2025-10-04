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

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Radius of a Circle Calculator
          </h1>
          <p className="text-xl text-orange-100 mb-6">
            Find the radius from diameter, circumference, or area instantly
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
              What is the Radius of a Circle?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The radius of a circle is the distance from the center point to any point on the circle&apos;s circumference. It is one of the most fundamental measurements in geometry and serves as the foundation for calculating all other circle properties. The radius is always constant for any given circle - no matter which point on the circumference you measure to, the distance from the center remains the same.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the radius is essential because it appears in nearly every circle formula. Whether you&apos;re calculating area, circumference, or working with circle equations in coordinate geometry, the radius is the key measurement that unlocks all other properties. The radius is typically denoted by the letter &apos;r&apos; in mathematical formulas and is measured in linear units such as centimeters, inches, meters, or feet.
            </p>

            <h2 id="formulas" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Three Ways to Find the Radius of a Circle
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              There are three primary methods for calculating the radius of a circle, depending on which measurement you already know. Each method uses a specific formula derived from the fundamental relationships between circle properties. Our calculator above supports all three methods, allowing you to find the radius regardless of which measurement you have available.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 1: Finding Radius from Diameter
            </h3>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6">
              <p className="text-lg font-semibold text-orange-900 mb-2">Formula:</p>
              <p className="text-2xl font-mono text-orange-800">r = d / 2</p>
              <p className="text-sm text-orange-700 mt-3">
                Where r is the radius and d is the diameter
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The diameter is the distance across the circle passing through the center - it&apos;s the longest possible straight line you can draw within a circle. The radius is exactly half the diameter, making this the simplest radius calculation. If you know the diameter is 20 cm, the radius is simply 20 ÷ 2 = 10 cm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This relationship is fundamental: the diameter is always twice the radius (d = 2r), and conversely, the radius is always half the diameter (r = d/2). This is often the first method students learn because of its straightforward nature and because diameters are easy to measure physically - you simply measure across the widest part of the circle.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 2: Finding Radius from Circumference
            </h3>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
              <p className="text-lg font-semibold text-red-900 mb-2">Formula:</p>
              <p className="text-2xl font-mono text-red-800">r = C / (2π)</p>
              <p className="text-sm text-red-700 mt-3">
                Where r is the radius, C is the circumference, and π ≈ 3.14159
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The circumference is the distance around the circle - its perimeter. The circumference formula is C = 2πr, so to find the radius from circumference, we rearrange this formula to solve for r. If the circumference is 31.4 cm, the radius would be 31.4 ÷ (2 × 3.14159) = 5 cm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This method is particularly useful when you&apos;ve measured around a circular object (like wrapping a string around a pipe or wheel) but can&apos;t easily measure across it. The mathematical constant π (pi) represents the ratio of any circle&apos;s circumference to its diameter, approximately equal to 3.14159. This ratio is the same for every circle, regardless of size.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 3: Finding Radius from Area
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
              The circumference is always 2π times the radius, which means the circumference is approximately 6.28 times longer than the radius. This ratio is constant for every circle - double the radius and you double the circumference. This linear relationship makes it easy to scale circles up or down while maintaining their proportions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Radius and Area
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The area has a squared relationship with the radius (A = πr²), which means if you double the radius, the area increases by a factor of four. This is because area is two-dimensional. A circle with a radius of 5 cm has an area of about 78.5 cm², but a circle with a radius of 10 cm has an area of about 314 cm² - four times as much, not twice as much.
            </p>

            <h2 id="applications" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Real-World Applications of Radius Calculations
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Engineering and Construction
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Engineers constantly work with radius calculations when designing circular components. Wheel designers need to know the radius to calculate rim sizes, spoke lengths, and load distribution. Architects calculate radii when designing circular windows, domes, or curved walls. Even road engineers use radius calculations when designing highway curves - a larger radius means a gentler, safer curve.
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
              Landscape designers use radius calculations to plan circular gardens, patios, or fountains. If you know you want a circular flower bed with an area of 50 square feet, calculating the radius tells you how far from the center point you need to mark the edge. Irrigation systems use radius calculations to determine coverage areas - a sprinkler with a 20-foot radius covers about 1,256 square feet.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Sports and Recreation
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Sports fields often feature circles: the center circle in soccer, the three-point arc in basketball, or the pitcher&apos;s mound in baseball. Understanding radius helps groundskeepers mark these areas accurately. Pool builders calculate radii for above-ground pools, and race track designers use radius calculations to plan curves that provide optimal racing conditions.
            </p>

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
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the radius of a circle in simple terms?</p>
                <p className="text-gray-700">The radius is the distance from the center of a circle to any point on its edge. It&apos;s like a spoke on a bicycle wheel - the distance from the hub to the rim. Every radius in a circle is exactly the same length.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How do you find the radius of a circle without the diameter?</p>
                <p className="text-gray-700">You can find the radius using the circumference (r = C / 2π) or the area (r = √(A/π)). These formulas work when you don&apos;t know the diameter but have measured the distance around the circle or calculated its area.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Is radius half of diameter or circumference?</p>
                <p className="text-gray-700">The radius is half the diameter, not half the circumference. The diameter goes straight across through the center, while the circumference goes all the way around. The circumference is actually about 3.14 times the diameter, or about 6.28 times the radius.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can a circle have more than one radius?</p>
                <p className="text-gray-700">A circle has infinite radii (plural of radius) because you can draw a line from the center to any point on the circumference. However, all these radii have the same length. When we say &quot;the radius&quot; of a circle, we mean this constant length value.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the radius of a 10-inch circle?</p>
                <p className="text-gray-700">This depends on whether 10 inches refers to the diameter or circumference. If 10 inches is the diameter, the radius is 5 inches. If 10 inches is the circumference, the radius is approximately 1.59 inches (10 ÷ 6.28).</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How do you measure the radius of a physical circle?</p>
                <p className="text-gray-700">Find the center point (mark where two diameters intersect), then measure from the center to any point on the edge. Alternatively, measure the diameter across the widest part and divide by 2. For irregular circles, measure the circumference with a flexible measuring tape and calculate r = C / 2π.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Why is the radius important in circle formulas?</p>
                <p className="text-gray-700">The radius is the fundamental measurement of a circle. Both the area formula (A = πr²) and circumference formula (C = 2πr) use the radius. It&apos;s more useful than diameter in calculations because it represents the most basic property of a circle - the distance from center to edge.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What happens to the radius if you double the area?</p>
                <p className="text-gray-700">If you double the area, the radius increases by the square root of 2 (approximately 1.41 times). This is because area grows with the square of the radius (A = πr²). To double the area, multiply the radius by √2, not by 2.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can you find the radius from just the area?</p>
                <p className="text-gray-700">Yes! Use the formula r = √(A/π). Divide the area by π (approximately 3.14159), then take the square root of the result. For example, if the area is 50 square units, the radius is √(50/3.14159) = √15.92 ≈ 3.99 units.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Do you need a calculator to find the radius?</p>
                <p className="text-gray-700">For simple diameter-to-radius conversions, you can calculate mentally (just divide by 2). For circumference or area calculations involving π or square roots, a calculator makes the process much easier and more accurate. Our online calculator above handles all three methods instantly.</p>
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
            <a href="https://diameterofacircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Diameter Calculator</h3>
              <p className="text-sm text-gray-600">Calculate diameter using d = 2r</p>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Circle Calculator Network</h2>
            <p className="text-gray-400">Professional mathematical tools for education and professional use</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Core Calculators</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://circumferenceofacircle.com" className="hover:text-white transition-colors">Circumference Calculator</a></li>
                <li><a href="https://areaofcircle.com" className="hover:text-white transition-colors">Area Calculator</a></li>
                <li><a href="https://equationofacircle.com" className="hover:text-white transition-colors">Equation Calculator</a></li>
                <li><a href="https://radiusofacircle.com" className="hover:text-white font-semibold">Radius (Current)</a></li>
                <li><a href="https://diameterofacircle.com" className="hover:text-white transition-colors">Diameter Calculator</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Formula Guides</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://circleareaformula.com" className="hover:text-white transition-colors">Area Formula πr²</a></li>
                <li><a href="https://circumferenceofacircleformula.com" className="hover:text-white transition-colors">Circumference Formula 2πr</a></li>
                <li><a href="https://areaofacircleformula.com" className="hover:text-white transition-colors">Circle Area Formula</a></li>
                <li><a href="https://formulaforareaofacircle.com" className="hover:text-white transition-colors">Formula Guide</a></li>
                <li><a href="https://surfaceareaofacircle.com" className="hover:text-white transition-colors">Surface Area Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Step-by-Step Tutorials</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://howtofindcircumference.com" className="hover:text-white transition-colors">How to Find Circumference</a></li>
                <li><a href="https://howtofindareaofacircle.com" className="hover:text-white transition-colors">How to Find Area</a></li>
                <li><a href="https://howtofindtheareaofacircle.com" className="hover:text-white transition-colors">Area Calculation Guide</a></li>
                <li><a href="https://howtofindcircumferenceofacircle.com" className="hover:text-white transition-colors">Circumference Guide</a></li>
                <li><a href="https://howtofindthecircumferenceofacircle.com" className="hover:text-white transition-colors">Complete Tutorial</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Specialized Tools</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://unitcircleradians.com" className="hover:text-white transition-colors">Unit Circle Radians</a></li>
                <li><a href="https://minecraftcirclechart.com" className="hover:text-white transition-colors">Minecraft Circle Chart</a></li>
                <li><a href="https://circlepng.com" className="hover:text-white transition-colors">Circle Images PNG</a></li>
                <li><a href="https://radiancircle.com" className="hover:text-white transition-colors">Radian Calculator</a></li>
                <li><a href="https://circleequation.com" className="hover:text-white transition-colors">Circle Equation Tools</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>© 2025 Circle Calculator Network. All calculators are free to use for educational and professional purposes.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}