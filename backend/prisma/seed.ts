import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clean existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@almashareq.com',
      password: adminPassword,
      role: Role.ADMIN,
    },
  });

  // Create demo user
  const userPassword = await bcrypt.hash('user123', 10);
  await prisma.user.create({
    data: {
      name: 'Demo User',
      email: 'user@almashareq.com',
      password: userPassword,
      role: Role.USER,
    },
  });

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: { name: 'Smart Home', slug: 'smart-home' },
    }),
    prisma.category.create({
      data: { name: 'Office Security', slug: 'office-security' },
    }),
    prisma.category.create({
      data: { name: 'Networking', slug: 'networking' },
    }),
    prisma.category.create({
      data: { name: 'Servers', slug: 'servers' },
    }),
    prisma.category.create({
      data: { name: 'Automation', slug: 'automation' },
    }),
  ]);

  const [smartHome, officeSecurity, networking, servers, automation] = categories;

  // Create products
  const products = [
    // Smart Home
    {
      name: 'Echo Dot 5th Gen (Alexa)',
      description: 'Smart speaker with Alexa. Voice control your smart home, play music, check weather, and more. Arabic & English support.',
      price: 1499,
      stock: 50,
      images: ['https://images.unsplash.com/photo-1543512214-318228f0f3b2?w=600'],
      categoryId: smartHome.id,
    },
    {
      name: 'Smart LED Bulb - WiFi',
      description: '16 million colors, voice control compatible with Alexa and Google Home. Schedule and dim from your phone.',
      price: 299,
      originalPrice: 449,
      stock: 200,
      images: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600'],
      categoryId: smartHome.id,
    },
    {
      name: 'Smart Lock Pro - Keypad',
      description: 'Fingerprint, PIN code, and app unlock. Auto-lock feature. Works with Alexa for voice-controlled locking.',
      price: 4999,
      originalPrice: 6999,
      stock: 25,
      images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=600'],
      categoryId: smartHome.id,
    },
    {
      name: 'Smart Thermostat',
      description: 'AI-powered temperature control. Learn your schedule and save energy. Remote control via app.',
      price: 3499,
      stock: 30,
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600'],
      categoryId: smartHome.id,
    },
    // Office Security
    {
      name: '4K CCTV Camera System (4-Pack)',
      description: 'Ultra HD 4K resolution, night vision 30m, motion detection, mobile app viewing. PoE wired setup.',
      price: 8999,
      originalPrice: 12999,
      stock: 15,
      images: ['https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600'],
      categoryId: officeSecurity.id,
    },
    {
      name: 'Access Control Panel - 2 Door',
      description: 'RFID card + fingerprint access control. Supports up to 2 doors. Logs all entry attempts.',
      price: 6499,
      stock: 10,
      images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600'],
      categoryId: officeSecurity.id,
    },
    {
      name: 'Motion Sensor Alarm System',
      description: 'PIR motion sensors with loud siren alarm. Wireless, easy install. Sends phone notifications.',
      price: 1999,
      stock: 40,
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600'],
      categoryId: officeSecurity.id,
    },
    {
      name: 'Smart Video Doorbell',
      description: '2K HD video, two-way audio, motion detection. Cloud and local storage. Works with Alexa.',
      price: 2499,
      stock: 35,
      images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=600'],
      categoryId: officeSecurity.id,
    },
    // Networking
    {
      name: 'WiFi 6 Mesh Router System',
      description: 'Tri-band WiFi 6 mesh system. Covers up to 500 sqm. Perfect for smart home device management.',
      price: 4999,
      originalPrice: 6999,
      stock: 20,
      images: ['https://images.unsplash.com/photo-1606904815999-434ff9b0e73f?w=600'],
      categoryId: networking.id,
    },
    {
      name: '24-Port Managed Switch',
      description: 'Gigabit managed switch with VLAN support. Perfect for office network segmentation.',
      price: 2999,
      stock: 25,
      images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600'],
      categoryId: networking.id,
    },
    {
      name: 'Outdoor Access Point',
      description: 'IP67 rated, long-range WiFi access point. Ideal for outdoor smart devices and surveillance.',
      price: 1799,
      stock: 30,
      images: ['https://images.unsplash.com/photo-1606904815999-434ff9b0e73f?w=600'],
      categoryId: networking.id,
    },
    // Servers
    {
      name: 'Rack Server - 4U (AI Ready)',
      description: 'Dual Xeon, 64GB RAM, NVMe storage. Optimized for AI inference and automation workloads.',
      price: 34999,
      originalPrice: 44999,
      stock: 5,
      images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600'],
      categoryId: servers.id,
    },
    {
      name: 'NAS Storage - 4 Bay',
      description: '4-bay NAS with RAID support. 16TB raw storage. Perfect for CCTV footage and smart home data.',
      price: 7999,
      stock: 15,
      images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600'],
      categoryId: servers.id,
    },
    // Automation
    {
      name: 'Smart Hub Controller',
      description: 'Central hub for Zigbee, Z-Wave, and WiFi devices. Automate your entire home or office.',
      price: 2499,
      stock: 40,
      images: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600'],
      categoryId: automation.id,
    },
    {
      name: 'Automated Blinds Motor',
      description: 'WiFi motor for existing roller blinds. Schedule, voice control, and sun-based automation.',
      price: 1299,
      stock: 50,
      images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=600'],
      categoryId: automation.id,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('Seeded:');
  console.log(`  - Admin: admin@almashareq.com / admin123`);
  console.log(`  - User: user@almashareq.com / user123`);
  console.log(`  - ${categories.length} categories`);
  console.log(`  - ${products.length} products`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
