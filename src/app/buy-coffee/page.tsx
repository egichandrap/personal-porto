export default function BuyCoffee() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-50 flex items-center justify-center p-6">
      <div className="space-y-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Buy me a Cup of Coffee
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Card 1 */}
          <div
            className="relative w-80 h-48 rounded-xl shadow-lg p-6 flex flex-col justify-center text-white"
            style={{
              backgroundImage: "url('/card-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-transparent rounded-lg p-4 space-y-2 max-w-xs border-0 text-white">
              <p><span className="font-semibold">Egi Chandra Pratama</span></p>
              <p><span className="font-semibold">8905575356</span></p>
              <p><span className="font-semibold">BCA</span></p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-80 h-48 rounded-xl shadow-lg p-6 flex flex-col justify-center text-white"
            style={{
              backgroundImage: "url('/card-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-transparent rounded-lg p-4 space-y-2 max-w-xs border-0 text-white">
              <p><span className="font-semibold">Egi Chandra Pratama</span></p>
              <p><span className="font-semibold">901276141640</span></p>
              <p><span className="font-semibold">SEABANK</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
