import React from 'react'
import Character from './Character';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Cast />
        </>  
    )
}

function Cast() {
    return (
        <section className="top-0 bg-gray-200 ml-45 mr-45 mt-10 min-w-1xl opacity-90 text-black mb-10">
            <div className="max-w-7xl pt-10 pl-10 pr-10 mx-auto flex-col">
                <Character name="Lonnie Cross" text={Lonnie()}/>
                <Character name="Josh Moreno" text={Josh()}/>
                <Character name="Pepper Lin" text={Pepper()}/>
                <Character name="Sayori Tanaka" text={Sayori()}/>
                <Character name="Ben Holtz" text={Ben()}/>
                <Character name="Alicia Reyes" text={Alicia()}/>
                <Character name="Roxanne Vega" text={Roxy()}/>
                <Character name="Marlin Graves" text={Marlin()}/>
                <Character name="Mortimer Crane" text={Mortimer()}/>
                <Character name="Mitch Murasaki" text={Mitch()}/>
            </div>
            
            <div className="pb-5 pl-10">
                <Link href="./" className="text-red-500 font-bold text-2xl mb:hover:underline">Back</Link>
            </div>
            
        </section>
    )
    
}

function Lonnie() {
    return (
        <>
        <p>Lonnie is a funny, nerdy and avid consumer of everything horror. Even as a child, he was watching YouTube vids he wasn't supposed to and as a
            result, numb to a lot of disturbing things. He's always begging the group to have horror movie nights, but can never get them to agree.
        </p>
        <p>He proudly writes a segment in the school paper talking about urban legends around the world and has published countless horror though amateur
            stories on writing platforms as a hobby. He also is commonly found at the board game club playing Magic or running a horror DnD campaign with 
            his other friend group.
        </p>
        <p>He was one of the first member of the group and has been thrilled to see it grow over a short period of time into what it is now. Though not the
            most serious, deeply cares about his friends' wellbeing and is the one organizing hangouts since nothing makes him happier than to see his friends
            smile and have fun.
        </p>
        </>
    )
}

function Josh() {
    return (
        <>
        <p>Josh lives by the more serious side, not taking much into the supernatural or fantasy side of the library. Instead, he sticks mostly to 
            to non-fiction and spending his days watching documentaries and reading articles and books about sciencey or social things.
        </p>
        <p>Though not exactly a workaholic like Alicia, he still does better than most in the group academically and makes sure he is always up to date
            on the news local, national and international. He's one of the few students who reads the school paper through. He attends hangouts and study
            sessions equally, but half the time isn't participating or doesn't know what's going on with the friend group. Most of the things the group is
            collectively into he isn't. He questions why he's even in the group but remembers Lonnie, who was his first high school friend that "founded" the
            group back in high school. He instead settles with particpating in as much as he can and leaving what he isn't interested in.
        </p> 
        </>
    )
}

function Pepper() {
    return (
    <>
        <p>The group's drama queen. Anytime a rumor or something spicy happens either inside or outside the group, she is the first to bring it up
            if it were ever come up in the first place. Many of the group tolerate her since without her, they admit they wouldn't know much about
            the circle.
        </p>

        <p>
            Her headstrong and histrionic attitude makes her one of the hardest in the group to get along with. Even she admits that she can go too far sometimes.
            However, she isn't totally heartless. If she finds that someone in the group has a crush, and she knows who it is, she's more than happy
            to give that person advice.
        </p>
    </>   
    )
    
}

function Sayori() {
    return (
        <>
            <p>Sayori is the photographer of the group. Anytime the group is at some kind of occasion or just eating casually on campus, she is always eager
                to take a selfie even at some of the most ridiculous times. This has led to many in the group considering her as the closest thing to
                the "mom" of the group despite the fact she is the youngest and the most bubbly.
            </p>

            <p>
                But when she isn't being cute and bubbly, she is constantly at odds with many of them for their biggest sin of all, constant swearing. Anytime
                someone spats a cuss word, she quickly becomes the bad cop, making her more appropriately the "mom." Some go as far as to admit fearing her
                wrath even if they say the word "crap."
            </p>
            <p>She also can sometimes get very quiet and serious out of nowhere. Whenever there's an all nighter or sleepover, she brings up the more serious 
                or strange things.
            </p> 
        </>
    )
}

function Ben() {
    return (
        <>
            <p>When he is not on the football or track teams working out daily, he's spending time with his unlikely group of nonsporty friends, more often than
                the former. He once got mad at one of his track members for talking low about Mortimer and Lonnie, citing their weird traits and obessions as cool
                and interesting. He is also asking and genuinely listening to his other friends on academic advice, which caused his grades take a major 
                leap forward, surprising his teachers and now profs.
            </p>
            <p>But he is not free from your normal stereotypical jock. He still falls under the player and hothead complexes, which puts him at one of the hardest
                to get along with. His "hero complex" certaintly doesn't help with his ability to get along with them nor with his many partners. He frequently argues 
                for long periods of time with Alicia and Pepper as he is constantly trying to force certain ideas with them.
            </p>
            <p>Despite that he's recently landed on Roxanne, someone in his group, and things have gone more smoothly than with anyone else. The group, though not super
                thrilled there's a relationship within the friend group, is happy that it at least is doing something good for him.
            </p>

        </>
    )
}

function Alicia() {
    return (
        <>
            <p>Alicia is the hardest working out of everyone in the group as it is her lifelong dream to become a career politician or lawyer. She is the one most frequently
                absent at hangouts since she spends all her of time in her dorm or on campus studying. It's gotten her into a few feuds with some of them who accuse
                her of overworking herself and neglecting her mental health and friends, but as a rising star in the speech and debate club, she always wins herself out of the
                argument. Despite that, her friends still deeply care for her, and are constantly checking up on her while at hangouts.
            </p>
            <p>
                She's a staunch no nonsense type and doesn't take kindly to jokes or sarcasm unless they are related to politics. Despite her workaholic attitude, it has at
                least rewarded her greatly her entire life with a high GPA, reputation among profs, peers and even a seat on the student government. It's almost a miracle
                she's in the group. The only reason she is is because she was dormates with Sayori one year, and she sort of liked the company. Now, she's been dragged into the
                group and figures that having this many friends will at least keep for her sane when she needs to study for long hours.
            </p>
        </>
    )
    
}

function Roxy() {
    return (
        <>
           <p>Roxy, as she mainly goes by, is one of the newest to the group, having joined the last quarter of their freshman year. She was brought into the circle when she accidentally
                walked into their groups' PowerPoint Night that they were holding in secret in one of the smallest halls on campus. When she walked in, Lonnie was on a slide, explaining
                a conspiracy theory. The group were at first shocked, but she quickly warmed up to them as she believed she was the only one that knew about the particular theory.
            </p>
            <p>Though her grades are average, but she still always tries her best. She came from a poor family and worked tireslessly to get one of the highest scholarships the school had
                to offer. She is the strangest in the group, and is also a hothead, which was probably the first thing Ben was attracted to. She also has some of the biggest trust issues out
                of everyone in the group.
            </p>
            <p>What many do admire her for in the gang is her undying loyalty. She's never missed a hangout and talks very highly when with her other smaller friend cricles, sometimes inviting
                them to PowerPoint Nights.
            </p>
        </>
    )
}

function Marlin() {
    return (
        <>
            <p>Marlin is the most arsty of the group. All non engineering related courses he takes are related to 3D art. His free time is spent making 3D models for people that commission him across
                campus to help with projects.
            </p>
            <p>He's sweet and nice to many, but his tolerance for the group has gotten lower and lower as time went on. It's almost a miralce he's still hanging out with them. Mostly, it's the gossip and
                crude jokes that annoys him the most. He's involved with many friend circles with this group simply being one he's spent the longest time in. His girlfriend, Jodie, also keeps him happy and
                sane. She's half the reason he's still in the group since she insists that he can't lose these "good friends of his."
            </p>
        </>
    )
}

function Mortimer() {
    return (
        <>
            <p>Mort, as he is mostly labeled by the group, is the most goofy and clumsy of them all. He is chill but in many ways ignorant. He does the worst academically, but is the class clown of the group.
                He's done a lot of weird things that have recently blurred the line between actually dumb or acting dumb. For example, his remarks about eggs being protein and doing two terrible parking jobs 
                a row are generally regarded by the group as acts of stupidity and comic relief. But then his acts of putting a marshmellow that was on fire in his mouth or blatantly insisting he's the alpha 
                male of the group has made some question if he's actually stupid or just playing a funny act. Either way, a good chunk of the group's fun memories involve him doing something.
            </p>
            <p>At one point though, Sayori caught him writing in a journal during creative writing class. Even weirder is that he didn't even notice she was in that class, and since then she has never seen 
                that journal again.
            </p>
        </>
    )
}

function Mitch() {
    return (
        <>
            <p>Mitch is the unofficial 10th member of the group. He was one of Ben's six dormates during their first year. On one certain day in November before Thanksgiving, Ben had all of the group to
                come over to play a few games. Ben had the funny idea of asking Mitch to cook them all dinner, however, despite knowing it was a joke, decided to take the opportunity and served them all salmon pasta.
                From that day onward, he's been designated as the chef of the group. He only shows up at Birthdays or when Ben has them all over at his dorm.
            </p>
            <p>He came from a rich family and has lived eating gourmet meals his entire life, which is where he gets his passion for the culinary arts.</p>
            
            <p>To the surprise of everyone, Mitch's family paid for the trip to Suncadia the year before and again this year. He's excited to cook more fantastic food for his now friends.</p>
        </>
    )
}