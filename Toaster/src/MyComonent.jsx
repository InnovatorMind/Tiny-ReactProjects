import { toast } from "sonner";

const MyComonent = () => {
  // Simulate an async API call
  const handleApiCall = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // randomly succeed or fail
          Math.random() > 0.5
            ? resolve("Data loaded!")
            : reject("Failed to load data");
        }, 2000);
      }),
      {
        loading: "Fetching data...",
        success: (data) => data,
        error: (err) => err,
      },
      { toasterId: "error" } // send errors to the error toaster
    );
  };
  

  return (
    <>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={() => toast.success("Data saved successfully!")}>
          Show Success Toast
        </button>

        <button
          onClick={() =>
            toast.error("Something went wrong!", { toasterId: "error" })
          }
        >
          Show Error Toast
        </button>

        <button onClick={handleApiCall}>
          Simulate API Call (Promise Toast)
        </button>
      </div>
    </>
  );
};

export default MyComonent;
