import React from 'react'

import il from './assets/w.png'
import kom from './assets/komp.png'
import lamp from './assets/lamp.png'
import um from './assets/um.png'
import h from './assets/gh.svg'
import op from './assets/op.png'

const Course = () => {
  return (
    <div>
      <div className='flex items-center justify-evenly '> 
                     <div className='flex flex-col gap-y-[30px]'>
                         <h1 className='text-[64px] w-[496px]'>
                             Enjoy studying with Createx Online Courses
                         </h1>
                         <div className='flex items-center gap-[30px]'>
                             <button className='w-[148px] border border-[#F75E05] text-[#F75E05] rounded-[5px] h-[52px]'>About Us</button>
                             <button className='text-[white] bg-[#FF3F3A] rounded-[4px] w-[200px] h-[52px]'>Explore courses</button>
                         </div>
                     </div>
                     <div>
                             <img src={il} alt="" />
                         </div>
                </div>


        <div className='mt-[250px] flex items-center justify-evenly m-auto'>
          <img src={kom} alt="" />
          <div className='flex flex-col gap-y-[10px]'>
            <p className='flex items-center gap-[5px]'><span className='text-[48px] text-[red] font-black'>1200</span>students graduated</p>
             <p className='flex items-center gap-[5px]'><span className='text-[48px] text-[red] font-black'>84</span>students graduated</p>
              <p className='flex items-center gap-[5px]'><span className='text-[48px] text-[red] font-black'>18</span>students graduated</p>
               <p className='flex items-center gap-[5px]'><span className='text-[48px] text-[red] font-black'>5</span>students graduated</p>
          </div>
        </div>

      <h1 className='text-center text-[30px] font-bold mt-[200px]'>Our core values</h1>

      <div className='flex flex-wrap gap-[150px] justify-center items-center mt-[100px]'>
      <div className='w-[390px] h-[430px] border border-[#E5E8ED]'>
        <img src={lamp} alt="" />
        <div className='flex flex-col gap-y-[20px] p-[40px]'>
         <div className='w-[90px] h-[33px] bg-[#5A87FC] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
          <p className='w-[342px] text-[#787A80]'>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <p className='text-[#1E212C] font-medium'>Check courses</p>
        </div>
      </div>
      <div className='w-[390px] h-[430px] border border-[#E5E8ED]'>
        <img src={lamp} alt="" />
        <div className='flex flex-col gap-y-[20px] p-[40px]'>
         <div className='w-[90px] h-[33px] bg-[#d0d0d0] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
          <p className='w-[342px] text-[#787A80]'>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <p className='text-[#1E212C] font-medium'>Check courses</p>
        </div>
      </div>
      <div className='w-[390px] h-[430px] border border-[#E5E8ED]'>
        <img src={lamp} alt="" />
        <div className='flex flex-col gap-y-[20px] p-[40px]'>
         <div className='w-[90px] h-[33px] bg-[#03CEA4] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
          <p className='w-[342px] text-[#787A80]'>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <p className='text-[#1E212C] font-medium'>Check courses</p>
        </div>
      </div>
      <div className='w-[390px] h-[430px] border border-[#E5E8ED]'>
        <img src={lamp} alt="" />
        <div className='flex flex-col gap-y-[20px] p-[40px]'>
         <div className='w-[90px] h-[33px] bg-[#F89828] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
          <p className='w-[342px] text-[#787A80]'>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <p className='text-[#1E212C] font-medium'>Check courses</p>
        </div>
      </div>
      <div className='w-[390px] h-[430px] border border-[#E5E8ED]'>
        <img src={lamp} alt="" />
        <div className='flex flex-col gap-y-[20px] p-[40px]'>
         <div className='w-[90px] h-[33px] bg-[#F52F6E] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
          <p className='w-[342px] text-[#787A80]'>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <p className='text-[#1E212C] font-medium'>Check courses</p>
        </div>
      </div>
      <div className='w-[390px] h-[430px] border border-[#E5E8ED]'>
        <img src={lamp} alt="" />
        <div className='flex flex-col gap-y-[20px] p-[40px]'>
         <div className='w-[90px] h-[33px] bg-[#7772F1] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
          <p className='w-[342px] text-[#787A80]'>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <p className='text-[#1E212C] font-medium'>Check courses</p>
        </div>
      </div>
      </div>

      <section className='mt-[200px]'>
        <div className='flex items-center m-auto justify-evenly'>
        <div className='flex flex-col gap-y-[30px]'>
          <h1 className='font-bold text-[46px]'>That’s how we do it</h1>
          <div className='flex flex-col gap-y-[10px] mt-[80px]'>
            <h1 className='font-bold text-[20px]'>Watching online video lectures</h1>
            <p className='w-[446px] text-[#787A80]'>
              Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.
            </p>

          </div>
           <div className='flex flex-col gap-y-[10px]'>
            <h1 className='font-bold text-[20px]'>Passing test</h1>
            <p className='w-[446px] text-[#787A80]'>
              Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. 
            </p>

          </div>
           <div className='flex flex-col gap-y-[10px]'>
            <h1 className='font-bold text-[20px]'>Curator’s feedback</h1>
            <p className='w-[446px] text-[#787A80]'>
             Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. 
            </p>

          </div>
           <div className='flex flex-col gap-y-[10px]'>
            <h1 className='font-bold text-[20px]'>Corrections if needed</h1>
            <p className='w-[446px] text-[#787A80]'>
             Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.
            </p>

          </div>
        </div>
        <img src={um} alt="" />
        </div>
      </section>

        <h1 className='mt-[200px] text-[40px] font-black text-center'>Meet our team</h1>
      <section>
        <div className='flex flex-wrap gap-[150px] items-center justify-center mt-[100px]'>
          <img src={h} alt="" />
          <img src={h} alt="" />
          <img src={h} alt="" />
          <img src={h} alt="" />
          <img src={h} alt="" />
          <img src={h} alt="" />
          <img src={h} alt="" />
          <img src={h} alt="" />
        </div>
      </section>


       <section className='mt-[200px]'>
                  <div className='flex items-center justify-center gap-[800px]'>
                      <h1 className='text-[46px] font-bold'>Latest posts</h1>
                      <button className='w-[159px] h-[52px] bg-[#FF3F3A] text-[white] rounded-[4px]'>Go to blog</button>
                  </div>
                  <div className='flex justify-center gap-[40px] items-center mt-[70px]'>
                      
                      <div className='flex flex-col gap-y-[20px]'>
                          <img src={op} alt="" className='w-[400px]'/>
                          <p className='w-[390px]'>What to do and who to talk to if you want to get feedback on the product</p>
                          <p className='w-[390px] text-[#424551]'>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...</p>
                      </div>
                      
                       <div className='flex flex-col gap-y-[20px]'>
                          <img src={op} alt="" className='w-[400px]'/>
                          <p className='w-[390px]'>What is traffic arbitrage and does it really make money?</p>
                          <p className='w-[390px] text-[#424551]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                      </div>
      
                       <div className='flex flex-col gap-y-[20px]'>
                          <img src={op} alt="" className='w-[400px]'/>
                          <p className='w-[390px]'>Should you choose a creative profession if you are attracted to creativity?</p>
                          <p className='w-[390px] text-[#424551]'>Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
                      </div>
      
                  </div>
                 </section>
      

           <section className=' mt-[300px]'>
             <h1 className='text-center text-[46px] text-[#1E212C] font-bold w-[900px] m-auto '>Subscribe to the Createx School announcements</h1>
             <div className='flex items-center justify-center mt-[60px] gap-[50px]'>
                <input type="search"  className='w-[422px] border border-[#D7DADD] bg-[#FFFFFF] h-[52px]'/>
                <button className='w-[154px] h-[52px] bg-[#FF3F3A] text-[white] rounded-[4px]'>Subscribe</button>
             </div>
           </section>


    </div>
  )
}

export default Course