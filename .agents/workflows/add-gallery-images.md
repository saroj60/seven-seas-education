---
description: How to add real images to the Gallery
---

Follow these steps to replace the placeholder images with your own real photos of Seven Seas Education:

### 1. Prepare your images
- Gather the photos you want to display (class sessions, celebrations, certificates, etc.).
- Try to use high-quality `.jpg` or `.png` files.
- Rename the files to be descriptive, for example: `class-session-1.jpg`, `cultural-event.png`.

### 2. Upload images to the project
- Copy your image files into the following directory:
  `c:/Users/saroj/Desktop/Everest japanese language/public/images/gallery/`

### 3. Update the Gallery code
- Open the file: `c:/Users/saroj/Desktop/Everest japanese language/src/pages/Gallery.jsx`
- Find the `images` array at the top.
- Update the `url` for each image to point to your new file:
  ```javascript
  { url: '/images/gallery/your-image-name.jpg', title: 'Your Image Title' },
  ```

### 4. Save and Preview
- Save the file. The website will automatically update with your real images.
