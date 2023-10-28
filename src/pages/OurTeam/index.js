import React, { useEffect, useState } from 'react'
import AuthGuard from "../../Layout/AuthGuard";
import bannerI from "../../assets/images/oakk.png"
import teamBanner from "../../assets/images/teambanner.png"
import founder1 from "../../assets/images/chiefeo.png"
import ceot from '../../assets/images/ceotii.png'
import '../../assets/style/event.css'
import '../../assets/style/about.css'
import '../../assets/style/ourteam.css'
const OurTeam = () => {
   
    return (
        <AuthGuard>
             <div className=" ">
            <div className=" oak-container-fluid oak-team-banner d-flex position-relative oak-mb">
                    <div className="oak-tbanner__text-wrapper">
                        <h3 className="oak-tbanner-header mb-4">Meet Our Team</h3>
                    </div>
                    <div className="position-absolute oak-team__banner-img ">
                        <img src={teamBanner} alt='banner-img' />
                    </div>
            </div>
            <section className='oak-ourTeam-content'>
                <div className='team'>
                    <div className='firstdetail'>
                    <div className='founder1'>
                        <img src={founder1}></img>
                        <h1>Pamela Johnson</h1>
                        <p>Chief Executive Offcer</p>
                    </div>
                    </div>
                    <div className='seconddetail'>
                        <p>Lorem ipsum dolor sit amet consectetur. Massa semper donec urna libero id pellentesque. Neque malesuada urna diam ac tortor risus. Cras sociis urna et molestie laoreet. Pretium volutpat suspendisse blandit scelerisque vehicula ac feugiat. Turpis at arcu ultricies sed. Tempor ac sit est ultrices vel arcu. Aliquet nec mauris at semper.
Nisi turpis tincidunt aliquam tincidunt. Eu ultricies habitasse elementum mi urna. Est volutpat mattis et amet nunc. Nulla nec pellentesque lorem aliquet leo neque. Commodo lectus elementum massa nibh rhoncus.
In tempus id habitasse egestas et tortor mauris dolor. Malesuada odio lacus cursus odio ut volutpat nunc auctor. Est neque orci varius mattis dui leo consequat consequat. Ipsum erat enim molestie tempor pretium mi. Convallis lectus nam consequat sit viverra facilisis phasellus mauris. Duis morbi volutpat elementum diam pretium consectetur in mus. Et sed dis molestie nisl turpis.
Aliquam tincidunt dui pretium eget vitae massa integer suspendisse. Leo nibh massa at lacus. Tincidunt dictum tortor mi natoque morbi feugiat cursus. Et tortor vitae molestie ipsum viverra diam sollicitudin. Platea auctor tristique consequat vel consectetur volutpat semper massa. Consequat lectus nunc dui ante leo aliquet non.
Nisl facilisis egestas ipsum sem. Duis accumsan pretium luctus in amet habitasse ac neque sapien. At gravida velit mauris bibendum dui risus tempor lacus. Adipiscing etiam euismod semper risus eu nunc. Elementum molestie arcu facilisis eget laoreet risus lacus. Vel sed interdum morbi eu mauris vitae. Fringilla faucibus donec quam feugiat in. Id enim in auctor viverra elementum. Est scelerisque porta nam accumsan id malesuada congue morbi. Diam et sed arcu laoreet hendrerit egestas suspendisse. Venenatis venenatis et venenatis cras vel nulla interdum ac. Nibh vivamus augue nec a molestie volutpat tristique mollis vitae. Nisl aliquet cursus nisl a aliquam. Auctor sollicitudin risus lobortis fermentum porta cras nisi quam. Blazh</p>
                    </div>
                </div>
                <div className='team1'>
                <div className='seconddetail'>
                    <h1>Pamela Johnson</h1>
                    <h2>Chief Executive Offcer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Massa semper donec urna libero id pellentesque. Neque malesuada urna diam ac tortor risus. Cras sociis urna et molestie laoreet. Pretium volutpat suspendisse blandit scelerisque vehicula ac feugiat. Turpis at arcu ultricies sed. Tempor ac sit est ultrices vel arcu. Aliquet nec mauris at semper.
Nisi turpis tincidunt aliquam tincidunt. Eu ultricies habitasse elementum mi urna. Est volutpat mattis et amet nunc. Nulla nec pellentesque lorem aliquet leo neque. Commodo lectus elementum massa nibh rhoncus.
In tempus id habitasse egestas et tortor mauris dolor. Malesuada odio lacus cursus odio ut volutpat nunc auctor. Est neque orci varius mattis dui leo consequat consequat. Ipsum erat enim molestie tempor pretium mi. Convallis lectus nam consequat sit viverra facilisis phasellus mauris. Duis morbi volutpat elementum diam pretium consectetur in mus. Et sed dis molestie nisl turpis.
Aliquam tincidunt dui pretium eget vitae massa integer suspendisse. Leo nibh massa at lacus. Tincidunt dictum tortor mi natoque morbi feugiat cursus. Et tortor vitae molestie ipsum viverra diam sollicitudin. Platea auctor tristique consequat vel consectetur volutpat semper massa. Consequat lectus nunc dui ante leo aliquet non.
Nisl facilisis egestas ipsum sem. Duis accumsan pretium luctus in amet habitasse ac neque sapien. At gravida velit mauris bibendum dui risus tempor lacus. Adipiscing etiam euismod semper risus eu nunc. Elementum molestie arcu facilisis eget laoreet risus lacus. Vel sed interdum morbi eu mauris vitae. Fringilla faucibus donec quam feugiat in. Id enim in auctor viverra elementum. Est scelerisque porta nam accumsan id malesuada congue morbi. Diam et sed arcu laoreet hendrerit egestas suspendisse. Venenatis venenatis et venenatis cras vel nulla interdum ac. Nibh vivamus augue nec a molestie volutpat tristique mollis vitae. Nisl aliquet cursus nisl a aliquam. Auctor sollicitudin risus lobortis fermentum porta cras nisi quam. Blazh</p>
                    </div>
                    <div className='firstdetail'>
                    <div className='teamr'>
                        <img src={ceot}></img>
                        
                    </div>
                    </div>
                   
                </div>
                <div className='team2'>
                <div className='firstdetail'>
                    <div className='teamr'>
                        <img src={ceot}></img>
                        
                    </div>
                    </div>
                <div className='seconddetail'>
                    <h1>Pamela Johnson</h1>
                    <h2>Chief Executive Offcer</h2>
                        <p>Lorem ipsum dolorrrr sit amet consectetur. Massa semper donec urna libero id pellentesque. Neque malesuada urna diam ac tortor risus. Cras sociis urna et molestie laoreet. Pretium volutpat suspendisse blandit scelerisque vehicula ac feugiat. Turpis at arcu ultricies sed. Tempor ac sit est ultrices vel arcu. Aliquet nec mauris at semper.
Nisi turpis tincidunt aliquam tincidunt. Eu ultricies habitasse elementum mi urna. Est volutpat mattis et amet nunc. Nulla nec pellentesque lorem aliquet leo neque. Commodo lectus elementum massa nibh rhoncus.
In tempus id habitasse egestas et tortor mauris dolor. Malesuada odio lacus cursus odio ut volutpat nunc auctor. Est neque orci varius mattis dui leo consequat consequat. Ipsum erat enim molestie tempor pretium mi. Convallis lectus nam consequat sit viverra facilisis phasellus mauris. Duis morbi volutpat elementum diam pretium consectetur in mus. Et sed dis molestie nisl turpis.
Aliquam tincidunt dui pretium eget vitae massa integer suspendisse. Leo nibh massa at lacus. Tincidunt dictum tortor mi natoque morbi feugiat cursus. Et tortor vitae molestie ipsum viverra diam sollicitudin. Platea auctor tristique consequat vel consectetur volutpat semper massa. Consequat lectus nunc dui ante leo aliquet non.
Nisl facilisis egestas ipsum sem. Duis accumsan pretium luctus in amet habitasse ac neque sapien. At gravida velit mauris bibendum dui risus tempor lacus. Adipiscing etiam euismod semper risus eu nunc. Elementum molestie arcu facilisis eget laoreet risus lacus. Vel sed interdum morbi eu mauris vitae. Fringilla faucibus donec quam feugiat in. Id enim in auctor viverra elementum. Est scelerisque porta nam accumsan id malesuada congue morbi. Diam et sed arcu laoreet hendrerit egestas suspendisse. Venenatis venenatis et venenatis cras vel nulla interdum ac. Nibh vivamus augue nec a molestie volutpat tristique mollis vitae. Nisl aliquet cursus nisl a aliquam. Auctor sollicitudin risus lobortis fermentum porta cras nisi quam. Blazh</p>
                    </div>
                    
                   
                </div>
                <div className='team1'>
                <div className='seconddetail'>
                    <h1>Pamela Johnson</h1>
                    <h2>Chief Executive Offcer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Massa semper donec urna libero id pellentesque. Neque malesuada urna diam ac tortor risus. Cras sociis urna et molestie laoreet. Pretium volutpat suspendisse blandit scelerisque vehicula ac feugiat. Turpis at arcu ultricies sed. Tempor ac sit est ultrices vel arcu. Aliquet nec mauris at semper.
Nisi turpis tincidunt aliquam tincidunt. Eu ultricies habitasse elementum mi urna. Est volutpat mattis et amet nunc. Nulla nec pellentesque lorem aliquet leo neque. Commodo lectus elementum massa nibh rhoncus.
In tempus id habitasse egestas et tortor mauris dolor. Malesuada odio lacus cursus odio ut volutpat nunc auctor. Est neque orci varius mattis dui leo consequat consequat. Ipsum erat enim molestie tempor pretium mi. Convallis lectus nam consequat sit viverra facilisis phasellus mauris. Duis morbi volutpat elementum diam pretium consectetur in mus. Et sed dis molestie nisl turpis.
Aliquam tincidunt dui pretium eget vitae massa integer suspendisse. Leo nibh massa at lacus. Tincidunt dictum tortor mi natoque morbi feugiat cursus. Et tortor vitae molestie ipsum viverra diam sollicitudin. Platea auctor tristique consequat vel consectetur volutpat semper massa. Consequat lectus nunc dui ante leo aliquet non.
Nisl facilisis egestas ipsum sem. Duis accumsan pretium luctus in amet habitasse ac neque sapien. At gravida velit mauris bibendum dui risus tempor lacus. Adipiscing etiam euismod semper risus eu nunc. Elementum molestie arcu facilisis eget laoreet risus lacus. Vel sed interdum morbi eu mauris vitae. Fringilla faucibus donec quam feugiat in. Id enim in auctor viverra elementum. Est scelerisque porta nam accumsan id malesuada congue morbi. Diam et sed arcu laoreet hendrerit egestas suspendisse. Venenatis venenatis et venenatis cras vel nulla interdum ac. Nibh vivamus augue nec a molestie volutpat tristique mollis vitae. Nisl aliquet cursus nisl a aliquam. Auctor sollicitudin risus lobortis fermentum porta cras nisi quam. Blazh</p>
                    </div>
                    <div className='firstdetail'>
                    <div className='teamr'>
                        <img src={ceot}></img>
                        
                    </div>
                    </div>
                   
                </div>
            </section>
                </div>
           
        </AuthGuard>
    )
}

export default OurTeam