import { Avatar, Container } from '@mui/material'
import Navbar from '../../Shared/Navbar/Navbar'

const DetailsHeroSection = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ backgroundColor: '#223044', minHeight: '310px' }}>
        <Container>
          <div
            style={{ minHeight: '310px' }}
            className="flex w-full text-white "
          >
            <div className="self-center">
              <h1 className="font-serif text-4xl">{props.blog.title}</h1>
              <p className="pt-2 font-mono">Category: {props.blog.category}</p>
              <div className="mt-3 flex">
                <Avatar
                  alt="Remy Sharp"
                  src="https://academy.jungtin.me/dynamic-images/w5jz66raxup_04-08-2021_03-04-26.jpeg"
                />
                <p className="self-center pl-2">
                  {' '}
                  Abdul Bari | 18th Feb 2022 | 9:00 am
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DetailsHeroSection
