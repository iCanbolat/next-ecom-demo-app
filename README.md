### E-Commerce Demo App

A modern, high-performance e-commerce application built with Next.js and shadcn/ui components. This demo showcases best practices for building e-commerce sites with a focus on performance, SEO, and user experience.



## 🚀 Features

- Product listing with responsive grid layout
- Detailed product pages with ratings and descriptions
- Shopping cart functionality with persistent storage
- Optimized images with loading states
- Toast notifications for user actions
- Responsive design for all device sizes


## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **State Management**: React Context API
- **Data Source**: [Fake Store API](https://fakestoreapi.com/)
- **Icons**: [Lucide React](https://lucide.dev/)


## 🏗️ Rendering Strategy

This application demonstrates different rendering techniques optimized for e-commerce:

### Product Listing Page

- **Rendering Method**: Server Side Rendered (SSR)
- **Why SSR?**: Provides the data freshness.
- **Benefits**: Fast page loads, good SEO as content is server side rendered.


### Product Detail Pages

- **Rendering Method**: Incremental Static Regeneration (ISR) with generateStaticParams
- **Revalidation**: Every 60 minutes
- **Why ISR?**: Product details change infrequently, and pre-rendering provides the fastest possible page loads while maintaining SEO benefits.
- **Static Path Generation**: Common product pages are pre-generated at build time using `generateStaticParams()`.
- **Dynamic Metadata**: Each product page has custom metadata generated from the product data for improved SEO.


### Cart Functionality

- **Rendering Method**: Client-side with React Context
- **Why Client-side?**: Cart state is user-specific and requires interactivity.
- **Persistence**: LocalStorage for store products.

## 🖼️ Image Optimization Techniques

Special attention was given to image optimization to prevent layout shifts and improve Core Web Vitals:

1. **Placeholder System**: Skeleton placeholders shown during image loading
2. **Smooth Transitions**: Opacity transitions when images load
3. **Responsive Sizing**: Proper image sizing with the Next.js Image component


## 🔧 Installation and Setup

1. Clone the repository:

```shellscript
git clone https://github.com/iCanbolat/next-ecom-demo-app.git
cd next-ecom-demo-app
```


2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## 🚀 Performance Considerations

- **ISR for Static Content**: Pre-rendered pages served from the edge
- **Client-side Interactivity**: Dynamic features like cart management run on the client
- **Image Optimization**: Next.js Image component with proper sizing and loading states
- **Metadata Optimization**: Dynamic metadata for better SEO


## 🔍 SEO Optimizations

- **Server-rendered Content**: All product data is pre-rendered for search engines
- **Dynamic Metadata**: Each product has custom title, description, and OpenGraph images
- **Performance Metrics**: Optimized Core Web Vitals for better search ranking
