export const uploadFile = async (file) => {
  // formdata to pass the file
  const formData = new FormData();

  // Appending file in form
  formData.append("file", file);

  try {
    // Send the file to the backend
    const response = await fetch(
      "https://planet-ai-backend.vercel.app/upload",
      {
        method: "POST",
        body: formData, // formdata contains the file
      }
    );

    // Check if successful
    if (response.ok) {
      // Parse the JSON
      const data = await response.json();

      // Checking if data is retrieved
      console.log("Data:", { data });

      // Return filename and extracted text
      return {
        filename: data.filename,
        extracted_text: data.extracted_text,
      };
    } else {
      // Error
      throw new Error("Couldn't Upload : " + response.statusText);
    }
  } catch (error) {
    // log the error
    console.error("Error uploading file:", error);
    throw error;
  }
};