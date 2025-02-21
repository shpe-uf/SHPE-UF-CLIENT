const API_URL = 'https://fcx3gq72ig.execute-api.us-east-1.amazonaws.com';

export const getSignedCookie = async (time, jwtToken) => {
  try {
    const response = await fetch(`${API_URL}/GenerateSignedCookie?time=${time}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Origin": "http://localhost:3000",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get signed cookie: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching signed cookie:", error);
    throw error;
  }
};

export const getPresignedUrl = async (bucket, objectKey, method, jwtToken) => {
  try {
    const response = await fetch(`${API_URL}/GenerateS3PresignedUrl`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ bucket, objectKey }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get presigned URL: ${response.statusText}`);
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error("Error fetching presigned URL:", error);
    throw error;
  }
};

export const handleUpload = async (bucket, file, jwtToken) => {
  try {
    const presignedUrl = await getPresignedUrl(bucket, file.name, "POST", jwtToken);
    const response = await fetch(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "image/jpeg"
      },
      body: file.data,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }

    console.log("File uploaded successfully");
    return true;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export const handleDelete = async (bucket, objectKey, jwtToken) => {
  try {
    const presignedUrl = await getPresignedUrl(bucket, objectKey, "DELETE", jwtToken);
    const response = await fetch(presignedUrl, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete file: ${response.statusText}`);
    }

    console.log("File deleted successfully");
    return true;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};

