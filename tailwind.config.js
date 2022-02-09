module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,jsx}',
    './components/**/*.{js,ts,jsx,jsx}',
  ],
  theme: {
    // এখানে এই extend এর ভিতরে আমরা আমাদের নিজেদের কোনো কালার বা ব্যাকগ্রাউন্ড কারার বা আরো কিছু ক্লাস কে মডিফাই করতে এখানে আমরা লিখবো ভুলেও আমরা আমরা extend এর বাইরে লিখবো না এতে আমাদের tailwind এর মেইন যেটাকে চেইঞ্জ করবো সেটা চলে যাবে মানে আমরা ব্যাবহার করতে পারবো না ।
    extend: {
      colors: {
<<<<<<< HEAD
        secondary: '#6b707f',
        darkBlue: '#2C303A',
=======
        primary: '#000',
        buttons: '#0000ff'
>>>>>>> 7defcb66ec11af102ff3cbbee5b52c7f4f48fc51
      },
    },
  },
  plugins: [],
}
