import { useEffect, useState } from "react";

function TabActivityDetector() {
  const [wasBackgrounded, setWasBackgrounded] = useState(false);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  console.log(trackingEnabled);

  function handleReset() {
    setWasBackgrounded(false);
  }
  
  // useEffect as a hook -> callback, deps
  // cleanup -> special function to remove any external deps
  useEffect(function() {
    console.log("executing useEffect");
    if(!trackingEnabled) {
      return;
    }

    function handleVisibilityChange() {
        console.log(document.visibilityState);
        // update our boolean state variable -> wasBackgrounded
        // visibilityState -> "visible" or "hidden"
        if(document.visibilityState === "hidden") {
          setWasBackgrounded(true);
        }
    }
    
    // eventType, callback
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // cleanup
    return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
    }
  
  }, [trackingEnabled]);

  return (
    <section className="panel">
      <h2>Tab activity</h2>

      <p className="status-line">
        Backgrounded since load:{" "}
        {/* equivalent to "wasBackgrounded === true" */}
        <strong>{wasBackgrounded ? "Yes" : "No"}</strong>
      </p>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={trackingEnabled}
          onChange={(event) => {
            setTrackingEnabled(event.currentTarget.checked);
          }}
        />
        Track tab activity
      </label>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </section>
  );
}

export default TabActivityDetector;
