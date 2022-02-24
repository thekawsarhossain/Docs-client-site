module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,jsx}',
    './components/**/*.{js,ts,jsx,jsx}',
  ],
  theme: {
    // এখানে এই extend এর ভিতরে আমরা আমাদের নিজেদের কোনো কালার বা ব্যাকগ্রাউন্ড কারার বা আরো কিছু ক্লাস কে মডিফাই করতে এখানে আমরা লিখবো ভুলেও আমরা আমরা extend এর বাইরে লিখবো না এতে আমাদের tailwind এর মেইন যেটাকে চেইঞ্জ করবো সেটা চলে যাবে মানে আমরা ব্যাবহার করতে পারবো না ।
    extend: {
      colors: {
        theme: {
          DEFAULT: '#1E0D3D',
          50: '#692FD3',
          100: '#602AC4',
          200: '#5023A2',
          300: '#3F1B80',
          400: '#2F145F',
          500: '#1E0D3D',
          600: '#07030F',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        secondary: '#6b707f',
        darkBlue: '#2C303A',
        primary: '#000',
        buttons: '#0000ff',
        lightBlue: '#4C4CF1',
        lightDark: '#131417',
        offwhite: '#F7F5F5',
      },
    },
  },
  plugins: [],
}
