export async function mockLLM(msg) {
  await new Promise(r => setTimeout(r, 800))
  
  // Demo different message types based on input
  if (msg.toLowerCase().includes('button')) {
    return {
      type: 'button-template',
      from: 'bot',
      text: 'Here are some useful links:',
      buttons: [
        { label: 'Documentation', url: 'https://example.com/docs' },
        { label: 'Support', url: 'https://example.com/support' }
      ]
    }
  }
  
  if (msg.toLowerCase().includes('card')) {
    return {
      type: 'card-template',
      from: 'bot',
      title: 'Sample Product',
      subtitle: 'This is a sample product description',
      image: 'https://via.placeholder.com/300x200'
    }
  }
  
  if (msg.toLowerCase().includes('slide') || msg.toLowerCase().includes('products')) {
    return {
      type: 'card-slide',
      from: 'bot',
      cards: [
        {
          title: 'Premium Wireless Headphones',
          subtitle: 'High-quality sound with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
          price: '$299.99',
          button: 'View Details'
        },
        {
          title: 'Smart Fitness Watch',
          subtitle: 'Track your health metrics, receive notifications, and monitor your workouts with this advanced fitness companion.',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
          price: '$199.99',
          button: 'Learn More'
        },
        {
          title: 'Portable Bluetooth Speaker',
          subtitle: 'Waterproof speaker with 360-degree sound and 20-hour battery life. Perfect for outdoor adventures.',
          image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop',
          price: '$89.99',
          button: 'Buy Now'
        },
        {
          title: 'Wireless Charging Pad',
          subtitle: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design for your desk or nightstand.',
          image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=300&h=200&fit=crop',
          price: '$49.99',
          button: 'Add to Cart'
        },
        {
          title: 'Smart Home Hub',
          subtitle: 'Control all your smart devices from one central hub. Compatible with Alexa, Google Home, and Apple HomeKit.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
          price: '$149.99',
          button: 'Explore'
        }
      ]
    }
  }
  
  if (msg.toLowerCase().includes('quick') || msg.toLowerCase().includes('reply')) {
    return {
      type: 'quick-replies',
      from: 'bot',
      text: 'Choose an option:',
      replies: ['Yes', 'No', 'Maybe', 'Tell me more']
    }
  }
  
  // Default text response
  return { 
    type: 'text', 
    from: 'bot', 
    text: `You said: "${msg}". Try saying "button", "card", "slide" or "products", or "quick reply" to see different message types!` 
  }
}
