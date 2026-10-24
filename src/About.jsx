import React, { useEffect, useState } from 'react'

import il from './assets/illustration.png'
import im from './assets/image(1).png'
import man from './assets/image.png'
import il2 from './assets/illustration(1).png'
import axios from 'axios'
import op from './assets/op.png'

// import Link from 'react-router';

const About = () => {
    const api = 'https://to-dos-api.softclub.tj/api/to-dos'
    const [data, setData] = useState([])
    const [newUser, setNewUser] = useState({
        name: '',
        isCompleted: false,
        description: '' 
    })
    const [showForm, setShowForm] = useState(false)

    const [image, setImage] = useState(null)

    async function get() {
        try {
            let {data} = await axios.get(api)
            console.log(data.data);
            setData(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    async function deletFunc(id) {
        try {
            await axios.delete(`${api}?id=${id}`)
            get()
        } catch (error) {
            console.error(error);
        }
    }
async function post() {
    try {
        const formData = new FormData()

        formData.append("Name", newUser.name)
        formData.append("Description", newUser.description)
        formData.append("IsCompleted", newUser.isCompleted)

        if (image) {
            formData.append("Images", image)
        }

        await axios.post(api, formData)

        get()
        setShowForm(false)

        setNewUser({
            name: "",
            description: "",
            isCompleted: false
        })
        setImage(null)
    } catch (error) {
        console.log(error)
    }
}


useEffect(()=>{
get()
},[])
    return (
        <div className="p-[30px]">
           <div className='flex items-center justify-evenly bg-[#FEDAD5]'> 
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

           <section className='flex justify-evenly mt-[200px] items-center'>
                <img src={im} alt="" />
                <div className='flex flex-col gap-y-[20px] ' >
                    <h1>Why Createx?</h1>
                    <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                    <p>Vulputate placerat amet pulvinar lorem nisl.</p>
                    <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                    <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                    <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
                    <button className='w-[161px] bg-[#FF3F3A] text-[white] rounded-[5px] h-[52px]'>More about us</button>
                </div>
           </section>

           <section className='p-[40px]'> 
            <h1 className='p-[150px] text-[40px] font-bold'>Featured Courses</h1>
            <div className='flex flex-wrap gap-[30px] ml-[300px]'>
                <div className='w-[600px] h-[214px] border border-[#E5E8ED] flex items-center justify-evenly'>
                    <img src={man} alt="" />
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='w-[90px] h-[33px] bg-[#03CEA4] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
                        <p>The Ultimate Google Ads Training Course</p>
                    <p className='text-[red]'> $100 <span className='text-[grey]'>by Jerome Bell</span></p>
                    </div>
                </div>
                 <div className='w-[600px] h-[214px] border border-[#E5E8ED] flex items-center justify-evenly'>
                    <img src={man} alt="" />
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='w-[90px] h-[33px] bg-[#5A87FC] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
                        <p>The Ultimate Google Ads Training Course</p>
                    <p className='text-[red]'> $100 <span className='text-[grey]'>by Jerome Bell</span></p>
                    </div>
                </div>
                 <div className='w-[600px] h-[214px] border border-[#E5E8ED] flex items-center justify-evenly'>
                    <img src={man} alt="" />
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='w-[90px] h-[33px] bg-[#03CEA4] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
                        <p>The Ultimate Google Ads Training Course</p>
                    <p className='text-[red]'> $100 <span className='text-[grey]'>by Jerome Bell</span></p>
                    </div>
                </div>
                 <div className='w-[600px] h-[214px] border border-[#E5E8ED] flex items-center justify-evenly'>
                    <img src={man} alt="" />
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='w-[90px] h-[33px] bg-[#F89828] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
                        <p>The Ultimate Google Ads Training Course</p>
                    <p className='text-[red]'> $100 <span className='text-[grey]'>by Jerome Bell</span></p>
                    </div>
                </div>
                 <div className='w-[600px] h-[214px] border border-[#E5E8ED] flex items-center justify-evenly'>
                    <img src={man} alt="" />
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='w-[90px] h-[33px] bg-[#F52F6E] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
                        <p>The Ultimate Google Ads Training Course</p>
                    <p className='text-[red]'> $100 <span className='text-[grey]'>by Jerome Bell</span></p>
                    </div>
                </div>
                 <div className='w-[600px] h-[214px] border border-[#E5E8ED] flex items-center justify-evenly'>
                    <img src={man} alt="" />
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='w-[90px] h-[33px] bg-[#5A87FC] text-[white] rounded-[4px] text-center pt-[4px]'>Marketing</div>
                        <p>The Ultimate Google Ads Training Course</p>
                    <p className='text-[red]'> $100 <span className='text-[grey]'>by Jerome Bell</span></p>
                    </div>
                </div>
            </div>
           </section>

           <section>
                <h1 className='text-center font-bold text-[46px] mt-[200px]'>That’s how we do it</h1>
                <div className='flex justify-center items-center gap-[40px] mt-[30px]'>
                    <p className='text-[#FF3F3A] border border-[#FF3F3A] w-[307px] h-[46px] rounded-[4px] text-center pt-[10px]'>Experienced Tutors</p>
                    <p className='text-[#9A9CA5] text-[16px]'>Feedback & Support</p>
                    <p className='text-[#9A9CA5] text-[16px]'>24/7 Online Library</p>
                    <p className='text-[#9A9CA5] text-[16px]'>Community</p>
                </div>

                <div className='mt-[182px] flex items-center justify-center gap-[135px]'>
                    <div className='flex flex-col gap-y-[24px]'>
                        <h1 className='text-[32px] text-[#1E212C] font-bold'>Only practicing tutors</h1>
                        <p className='w-[495px] text-[#424551]'>
                            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                        </p>
                    </div>
                    <img src={il2} alt="" />
                </div>
           </section>
           

           <section className='mt-[100px]'>
           <button
    className='w-[100px] h-[40px] bg-[#57be57] text-[white] rounded-[5px] ml-[330px]'
    onClick={() => setShowForm(true)}
>
    Add User
</button>
                 <table className="w-full max-w-[1200px] mx-auto mt-10 border-collapse border border-gray-300 text-left">
    <thead className="bg-gray-200">
        <tr>
            <th className="border border-gray-300 p-4 text-lg">Image</th>
            <th className="border border-gray-300 p-4 text-lg">Name</th>
            <th className="border border-gray-300 p-4 text-lg">Status</th>
            <th className="border border-gray-300 p-4 text-lg">Description</th>
            <th className="border border-gray-300 p-4 text-lg">Actions</th>
        </tr>
    </thead>

    {data?.map(el => (
        <tbody key={el.id}>
            <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4">
                    {el.images?.map(im => (
                        <img
                            key={im.id}
                            src={'https://to-dos-api.softclub.tj/images/' + im.imageName}
                            className="w-[80px] h-[80px] object-cover rounded-md"
                            alt=""
                        />
                    ))}
                </td>
                <td className="border border-gray-300 p-4 text-base">{el.name}</td>
                <td className="border border-gray-300 p-4">
                    <span className={`px-4 py-2 rounded-md text-white ${el.isCompleted ? 'bg-green-500' : 'bg-red-500'}`}>
                        {el.isCompleted ? 'Active' : 'Inactive'}
                    </span>
                </td>
                <td className="border border-gray-300 p-4 text-base">{el.description}</td>
                <td className="border border-gray-300 p-4 text-base">
                    <button className='w-[100px] h-[30px] bg-[violet] text-[white] rounded-[5px] ml-[100px]'>Info</button>
                    <button className='border border-[red] text-[red] w-[100px] h-[30px] rounded-[4px] ml-[10px]'
                    onClick={()=> deletFunc(el.id)}
                    >Delete</button>
                </td>
            </tr>
        </tbody>
    ))}
</table>
               
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

        {showForm && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                onClick={() => setShowForm(false)}
            >
                <form
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="add-user-title"
                    className="flex w-full max-w-[400px] flex-col gap-4 rounded-lg bg-white p-6 shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={(e) => {
                        e.preventDefault()
                        post(newUser)
                    }}
                >
                    <h2 id="add-user-title" className="text-xl font-bold">Add User</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        className="rounded border p-2"
                        value={newUser.name}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                name: e.target.value
                            })
                        }
                        required
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        className="rounded border p-2"
                        value={newUser.description}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                description: e.target.value
                            })
                        }
                        required
                    />

    <input
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
/>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={newUser.isCompleted}
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    isCompleted: e.target.checked
                                })
                            }
                        />
                        Completed
                    </label>

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            className="rounded bg-gray-200 px-4 py-2"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="rounded bg-green-600 px-4 py-2 text-white"
                           type='submit'
                        >
                            Save User
                        </button>
                    </div>
                </form>
            </div>
        )}
        </div>
    )
}

export default About