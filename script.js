// Placeholder for AI Artwork Description logic
// script.js

function generateDescription(imageName) {
    let description = '';
  
    // Custom descriptions for each painting (you can modify these to fit your style)
    switch(imageName) {
      case '21.jpeg':
        description = 'This is a detailed pencil sketch that captures the delicate balance of light and shadow, evoking a sense of realism and depth.';
        break;
      case '22.jpeg':
        description = 'A dynamic composition created using bold lines, this sketch represents the movement of form and energy in a simple yet powerful way.';
        break;
      case '23.jpeg':
        description = 'This piece portrays the intricate details of nature through delicate shading and fine lines, bringing life to an otherwise ordinary object.';
        break;
      case '11.png':
        description = 'A vibrant and colorful mural painting that blends abstract patterns with a touch of realism, creating a visual story that captures attention.';
        break;
      case '12.jpeg':
        description = 'This mural showcases a blend of bright colors and contrasting textures, reflecting urban life and its fast-paced rhythm.';
        break;
      case '13.jpeg':
        description = 'A geometric mural piece that plays with lines and colors, conveying a sense of harmony and balance in the midst of chaos.';
        break;
      case '31.jpeg':
        description = 'A serene watercolor painting that captures the soft and subtle hues of nature, bringing out a peaceful mood with every brushstroke.';
        break;
      case '32.jpeg':
        description = 'A beautifully detailed watercolor piece that captures the ephemeral beauty of flowers, showcasing delicate petals and vivid colors.';
        break;
      case '1.jpeg':
        description = 'A bold and expressive acrylic painting that utilizes thick layers of paint to create an intense visual experience, evoking deep emotions.';
        break;
      default:
        description = 'This artwork is one of a kind, filled with intricate details and creative expression.';
        break;
    }
  
    // Show the description in an alert (can be replaced with something more sophisticated later)
    alert(description);
  }
  