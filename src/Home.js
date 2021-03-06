import './Home.css';
import Brain from './images/brain.png';
import Shadow from './images/shadow.png';
import Insta from './images/Insta_out.png';
import insta from './images/Insta_in.png';
/*import Logo from './images/';*/
import Linkedin from './images/linkedin.png';
import Discord from './images/discord.png';
import Arrow from './images/arrow.png';
import Event_Image from './images/event_image.JPG';
import Right_Arrow from './images/right_arrow.png';

function Home(){
    return(
        <div >
            <div class='Home'>
                <header>
                    <p class='name'>E-CELL IARE</p>
                    <p class='menu'>MENU </p>
                </header>
                <section class='one'>
                        <p class='tagline'>A platform to change ideas into reality</p>
                            <img class='Brain' src={Brain} alt='' />
                            <br></br>
                            <img class='Shadow' src={Shadow} alt='' />
                        <div class='socialmedia'>
                            <li class='Insta'><img src={Insta} alt='' /></li>
                            <li class='Linkedin'><img src={Linkedin} alt='' /></li>
                            <li class='Discord'><img src={Discord} alt='' /></li>
                        </div>
                </section>
            </div>
            <div class='body1'>
                <p class='about'>ABOUT</p>
                <p class='txt1'>
                    E-Cell IARE is a platform to encourage startups from young minds. A place to nurture ideas to a fully-fledged startup with all the essential resources and necessary mentorship. A rostrum to compete on ideas from minds across the nation. 
                </p>
                <img class='about_image' src={Event_Image}  alt='' />
                <p class='txt2'>
                    E-Cell IARE is a platform to encourage startups from young minds. A place to nurture ideas to a fully-fledged startup with all the essential resources and necessary mentorship. A rostrum to compete on ideas from minds across the nation. 
                </p>
            </div>
            <div class='body3'>
                <p class='vision'>VISION</p>
                <p class='ideate'>&#62; IDEATE</p>
                <p class='involve'>&#62; INVOLVE</p>
                <p class='impact'>&#62; IMPACT</p>
            </div>
            <div class='body4'>
                <p class='events'>EVENTS</p>
                <p class='events_txt'>We conduct a plethora of events comprising of JAM, speaker sessions, brainstorming sessions and much more to develop overall skills. The events aim for active participation and engagement.</p>
                <div class='event1'>
                    <img class='event1_pic' src={Event_Image} alt='' />
                    <p class="event1_name">Lorem ipsuadipiscing </p>
                    <p class="event1_date">JAN 2, 2022</p>
                    <img src={Right_Arrow} alt="" class="rightarrow" />
                </div>
                <div class='event2'>
                    <img class='event2_pic' src={Event_Image} alt='' />
                    <p class="event1_name">Lorem ipsuadipiscing </p>
                    <p class="event1_date">JAN 2, 2022</p>
                    <img src={Right_Arrow} alt="" class="rightarrow" />
                </div>
                <div class='event3'>
                    <img class='event3_pic' src={Event_Image} alt='' />
                    <p class="event1_name">Lorem ipsuadipiscing </p>
                    <p class="event1_date">JAN 2, 2022</p>
                    <img src={Right_Arrow} alt="" class="rightarrow" />
                </div>
            </div>
            <div class='body5'>
                <p class='blogs'>BLOGS</p>
                <p class="blogs_txt">The stakes are higher every minute. We keep you updated with the latest trends in the world full of million-dollar ideas. Head up to our blogs to find out more.</p>
                <div class='blog1'>
                    <img class='blog1_pic' src={Event_Image} alt='' />
                    <p class="blog1_name">Lorem ipsuadipiscing </p>
                    <p class="blog1_date">JAN 2, 2022</p>
                    <img src={Right_Arrow} alt="" class="rightarrow" />
                </div>
                <div class='blog2'>
                    <img class='blog1_pic' src={Event_Image} alt='' />
                    <p class="blog1_name">Lorem ipsuadipiscing </p>
                    <p class="blog1_date">JAN 2, 2022</p>
                    <img src={Right_Arrow} alt="" class="rightarrow" />
                </div>
            </div>
            <div class='body6'>
                <p class='team'>TEAM</p>
                <p class='team_txt'>Meet our team of enthusiasts working to deliver the best of resources for upcoming entrepreneurs.</p>
                <button>Explore</button>
                <img src={Event_Image} alt="" className="member1" />
                <img src={Event_Image} alt="" className="member2" />
                <img src={Event_Image} alt="" className="member3" />
            </div>
            <div class='body7'>
                <p class="body7_txt">Hello, Lets  have a chat</p>
                <div class="box1">
                    <p class="box_txt1">Organize</p>
                    <p class="arrow1"><img src={Arrow} alt='' /></p> 
                </div>
                <div class="box2">
                    <p class="box_txt2">Join the team</p>
                    <p class="arrow2"><img src={Arrow} alt='' /></p>
                </div>
                <div class="box3">
                    <p class="box_txt3">Drop a quick word</p>
                    <p class="arrow3"><img src={Arrow} alt='' /></p>
                </div>
            </div>
            <footer>
                {/* <img src={Logo} alt='' /> */}
                <div class='coloumn1'>
                    <p class='s'>Social</p>
                    <p class='s1'>Instagram</p>
                    <p class='s2'>Linkedln</p>
                </div>
                <div class='coloumn1'>
                    <p class='p'>Pages</p>
                    <p class='p1'>Home</p>
                    <p class='p2'>About</p>
                    <p class='p3'>Events</p>
                    <p class='p4'>Blogs</p>
                    <p class='p5'>Contact</p>
                    <p class='p6'>Team</p>
                </div>
            </footer>
        </div>
    );
        
    
}
export default Home;