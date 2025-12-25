import './App.css'

function App() {
    return (
      <div className="min-h-screen bg-[var(--color-brown-100)] p-8">
        {/* Base style label */}
        <div className="mb-4 inline-block rounded bg-white px-3 py-1 text-xs text-[var(--color-brown-500)]">
          Base style
        </div>
  
        <div className="rounded-xl bg-white p-8">
          <div className="grid grid-cols-2 gap-12">
            {/* LEFT: Colors */}
            <div>
              <p className="text-sm text-[var(--color-brown-400)]">Color</p>
              <h2 className="text-lg font-semibold text-[var(--color-brown-400)]">
                Colors
              </h2>
  
              <p className="mt-6 text-sm text-[var(--color-brown-400)]">Base</p>
  
              <div className="mt-3 flex gap-4">
                <ColorBox label="Brown 600" hex="#26231E" color="--color-brown-600" />
                <ColorBox label="Brown 500" hex="#43403B" color="--color-brown-500" />
                <ColorBox label="Brown 400" hex="#75716B" color="--color-brown-400" />
                <ColorBox label="Brown 300" hex="#DAD6D1" color="--color-brown-300" />
                <ColorBox label="Brown 200" hex="#EFECEB" color="--color-brown-200" />
                <ColorBox label="Brown 100" hex="#F9F8F6" color="--color-brown-100" />
                <ColorBox label="White" hex="#FFFFFF" color="--color-white" />
              </div>
  
              <p className="mt-8 text-sm text-[var(--color-brown-400)]">Brand</p>
  
              <div className="mt-3 flex gap-4">
                <ColorBox label="Orange" hex="#F2B68C" color="--color-brand-orange" />
                <ColorBox label="Green" hex="#12B279" color="--color-brand-green" />
                <ColorBox label="Green" hex="#D7F2E9" color="--color-brand-green-soft" />
                <ColorBox label="Red" hex="#EB5164" color="--color-brand-red" />
              </div>
            </div>
  
            {/* RIGHT: Fonts */}
            <div>
              <p className="text-sm text-[var(--color-brown-400)]">Font</p>
              <h2 className="text-lg font-semibold text-[var(--color-brown-400)]">
                Fonts
              </h2>
  
              <div className="mt-8 space-y-4 text-[var(--color-brown-600)]">
                <div className="text-headline-1">Headline 1</div>
                <div className="text-headline-2">Headline 2</div>
                <div className="text-headline-3">Headline 3</div>     
  
                <div className="text-headline-4">Headline 4</div>
                <div className="text-body-1">Body 1</div>
                <div className="text-body-2">Body 2</div>
                <div className="text-body-3">Body 3</div>
  

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  /* small helper */
  function ColorBox({ label, hex, color }) {
    return (
      <div>
        <div
          className="h-16 w-20 rounded-lg border border-[var(--color-brown-300)]"
          style={{ backgroundColor: `var(${color})` }}
        />
        <div className="mt-1 text-xs">
          <div className="text-[var(--color-brown-600)]">{label}</div>
          <div className="text-[var(--color-brown-400)]">{hex}</div>
        </div>
      </div>
    );
  }
  

export default App
