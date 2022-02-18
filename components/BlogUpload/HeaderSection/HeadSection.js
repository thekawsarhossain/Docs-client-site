import Navbar from '../../Shared/Navbar/Navbar'

const HeadSection = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ backgroundColor: '#223044', minHeight: '310px' }}>
        <div>
          <img
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/leaf_left.png"
            alt=""
          />
          <img
            className="absolute top-40 left-24 hidden md:block"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/man_01.png"
            alt=""
          />
          <img
            className="absolute right-40 top-32 hidden md:block"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/man_02.png"
            alt=""
          />
          <img
            className="absolute right-0 top-24"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/leaf_right.png"
            alt=""
          />
        </div>
        <div
          style={{ minHeight: '310px' }}
          className="flex w-full items-center justify-center text-center text-white"
        >
          <div className="self-center">
            <h1 className="font-serif text-4xl">
              Hello! here is <span className="font-extrabold">Docy</span>{' '}
            </h1>
            <p className="pt-2 font-mono">
              Shear your blog or documentation with{' '}
              <span className="font-black">Docy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadSection
