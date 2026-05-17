SnapPass AI — Python AI Service
The Python AI microservice for SnapPass AI. Built with Flask, it handles all image processing tasks — background removal, face centering, DPI optimisation, and A4 sheet generation.
Runs on http://localhost:8000 and is called by the Express backend.

Prerequisite
Python 3.9 or higher(prefer 3.9)

Local Setup
1.Navigate to service folder
  cd python-ai-service

2.Create and activate a virtual environment
  # Create
     python3.9 -m venv venv

  # Activate — Mac/Linux
     source venv/bin/activate

  # Activate — Windows
     venv\Scripts\activate

3.Install dependencies
   pip install -r requirements.txt


4.Create your .env file

   PORT=8000
   FLASK_DEBUG=true
   UPLOAD_DIR=uploads
   MAX_FILE_MB=10

5.Start the service
    python main.py

Service will be running at http://localhost:8000


API Endpoints
  GET /health
  Check if the service is running.
 
    {
      "status": "ok",
      "service": "python-ai-service"
    }

  POST /remove-bg

    Removes the background from a portrait photo and replaces it with a solid colour.

    Request — multipart/form-data:

    FIELD  |  TYPE |  REQUIRED |  DESCRIPTION
 ___________|_______|___________|________________
    image  | File  |   yes     |  Portrait photo (JPEG, PNG, WEBP)
bg_colour  |   text|    no     |  Colour name or hex. Default: white
           |       |           |

Supported background_colour values:
Value          Description
white          Pure white — most passport standards
off-white      Slightly warm white
blue           Passport blue (some country standards)
grey/gray      Light grey
#ffffff      Any custom hex colour code

Success Response — 200 OK:
Returns the processed image directly as image/png bytes.
Error Responses:
Status    Reason
400       No image file provided or empty filename
422       Unsupported background colour value
500       Internal processing error


Backend Integration Guide
This section explains how the Express backend (image.controller.js) should call this service.
How it works
React Frontend
     ↓  POST /api/process
Express Backend (port 5000)
     ↓  POST /remove-bg
Python AI Service (port 8000)
     ↓  returns PNG bytes
Express Backend
     ↓  returns image to frontend
React Frontend


Environment variable
  Make sure this is set in backend/.env:
  envAI_SERVICE_URL=http://localhost:8000
  This maps to config.aiServiceUrl in backend/src/config/app.config.js


Testing the Service
  1.Using Postman

  2.Method: POST
  3.URL: http://localhost:8000/remove-bg
  4.Body → form-data
  5.Add field: image → type File → select your photo
  6.Add field: background_colour → type Text → white
  7.Click Send

  You will receive the background-removed PNG directly in the response.


  Folder Structure

  python-ai-service/
├── main.py                        # Flask app entry point — runs on port 8000
├── config.py                      # Reads .env variables
├── requirements.txt               # Python dependencies
├── .env                           # Local environment variables (not committed)
├── .gitignore                     # venv, uploads, .env excluded
├              
└── app/
    ├── routes/
    │   └── process_routes.py      # All Flask endpoint definitions
    └── services/
        ├── bg_remove.py           # Background removal using rembg 
        ├── face_center.py         # Face detection using OpenCV 
        ├── dpi_optimizer.py       # DPI resize using Pillow 
        └── sheet_generator.py     # A4 sheet tiling using Pillow


Dependencies

Dependencies
Package         Purpose
flask           Web framework — serves the API endpoints
flask-cors      Allows cross-origin requests from the React frontend
rembgAI-        powered background removal using U2Net model
Pillow          Image compositing, resizing, and DPI handling
opencv-python-  Face detection using Haar cascade
headless
python-dotenv   Loads .env variables into config.py


