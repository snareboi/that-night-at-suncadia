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
        <section className="top-0 bg-gray-200 ml-4 mr-4 mt-10 min-w-1xl opacity-90 text-black mb-10">
            <div className="max-w-7xl pt-10 pl-10 pr-10 mx-auto flex-col">
                <Character name="Lonnie Cross" text={Lonnie()}/>
                <Character name="Pepper Lin" text={Pepper()}/>
                <Character name="Sayori Preeti" text={Sayori()}/>
                <Character name="Ben Graves" text={Ben()}/>
                <Character name="Alicia Moreno" text={Alicia()}/>
                <Character name="Roxanne Vega" text={Roxy()}/>
                <Character name="Mortimer Crane" text={Mortimer()}/>
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
        <p>
            Lonnie is a funny, nerdy and avid consumer of everything horror. Even as a child, he was watching YouTube videos he wasn't supposed to and as a result, is numb to a lot of disturbing things. He's always begging the group to have horror movie nights but can never get them to agree.
        </p>
        <p>
            He proudly writes a segment in the school paper talking about urban legends around the world and has published countless amateur horror stories on writing platforms as a hobby. He also is commonly found at the board game club playing Magic or running a horror DnD campaign with his other friend group.
        </p>
        <p>
            He was one of the first members of the group and was thrilled to see it grow over a short period of time into what it is now. Though not the most serious guy, he deeply cares about his friends and is the one organizing hangouts since nothing makes him happier than seeing his friends smile and have fun.
        </p>
        </>
    )
}

function Pepper() {
    return (
    <>
        <p>
            The group's drama queen. Anytime a rumor or something spicy happens either inside or outside the group, she is the first to bring it up. Her headstrong and histrionic attitude sometimes puts her at odds with others in the group. Even she admits that she can go too far sometimes.
        </p>

        <p>
            But if she finds out someone in the group has a crush or is on the brink of getting a job or cool opportunity, she becomes that person’s number one supporter. If the group ever needs to keep a conversation interesting, Pepper always has some crazy story to tell.
        </p>
    </>   
    )
    
}

function Sayori() {
    return (
        <>
            <p>
                Sayori is the photographer of the group. Anytime the group is at some kind of occasion or just eating casually on campus, she is always eager to take a selfie even at some of the most ridiculous times. This has led to many in the group considering her as the closest thing to the "mom" of the group despite the fact she is the youngest and most bubbly.
            </p>
            <p>
                But when she isn’t cute and bubbly, she is constantly at odds with many of them for their biggest sin of all, constant swearing. Anytime someone spats a cussword, she quickly becomes the bad cop. She, like Pepper, also becomes supportive, especially when they aren’t feeling great for whatever reason.
            </p>
            <p>
                She also can sometimes get very quiet and serious out of nowhere. Whenever there's an all nighter or sleepover, she brings up more serious or strange things.
            </p> 
        </>
    )
}

function Ben() {
    return (
        <>
            <p>
                When he is not on the football, track or workout clubs, he's spending time with his unlikely group of non-sporty friends. He once got into a heated argument with one of his track teammates for talking low about Mortimer and Lonnie. He is also asking and genuinely listening to his other friends on academic advice, which caused his grades to take a major leap forward, surprising his teachers back in high school, which continues to this day.
            </p>
            <p>
                But he still falls under the player and hothead complexes, which puts him at odds with some of the others. He has many hot takes on media, social interactions and other various topics that have been the point of many all-night discussions. He’s also been the victim of many of Pepper’s gossip because of all of his exes.
            </p>
            <p>
                He's recently landed with Roxanne, someone else in their group, and things have gone more smoothly than with anyone else. The group, though not super thrilled there's a relationship within the friend group, is happy that it at least is doing something good for him.
            </p>

        </>
    )
}

function Alicia() {
    return (
        <>
            <p>
                Alicia is the hardest working out of everyone in the group. It is her lifelong dream to become a career politician. She is the one most frequently absent at hangouts since she spends all her of time in her dorm or in different spots studying. It's gotten her into a few feuds with the group who accuse her of overworking herself and neglecting her mental health. Yet as a rising star in the speech and debate club, she always wins herself out of the argument. Despite that, her friends still deeply care for her, and are constantly checking up on her while at hangouts.
            </p>
            <p>
                Despite her workaholic attitude, it has at least rewarded her greatly her entire life with a high GPA, reputation among profs, peers and even a seat on the student government. 
            </p>
            <p>
                She's been part of the group since the start. She likes the company and figures that having them will at least keep for her sane when she needs to study for long hours. She also loves cooking and baking, taking every opportunity to make her friends meals.
            </p>
        </>
    )
    
}

function Roxy() {
    return (
        <>
            <p>
                Roxy, as she mainly goes by, joined the group last quarter of their freshman year after being Sayori's roommate and caving to Sayori's request to hangout with her friends. She began hanging out with the gang and slowly realized how much she loved them all.
            </p>
            <p>
                She came from a poor rural family and worked tirelessly to get one of the highest scholarships the school had to offer. She is the strangest in the group, and is also a hothead, which was probably the first thing Ben was attracted to.
            </p>
            <p>
                What many in the gang do admire her for is her undying loyalty. She's never missed a hangout and talks very highly when with her other smaller friend cricles, sometimes inviting them to PowerPoint Nights.
            </p>
        </>
    )
}

function Mortimer() {
    return (
        <>
            <p>
                Mort, as he is mostly labeled by the group, is the most goofy and clumsy of them all. He is chill but in many ways ignorant. He's done a lot of weird things that have recently blurred the line between actually dumb or acting dumb. For example, his remarks about eggs being diary and doing two terrible parking jobs a row are regarded as actually dumb. But then his acts of putting a marshmallow that is blatantly fire in his mouth or insisting he's the alpha male of the group has made some question if he's actually stupid or just playing a funny act. Either way, a good chunk of the group's fun memories involves him doing something.
            </p>
            <p>
                At one point though, Sayori caught him writing in a journal during creative writing class. What she claimed was weird was how when he finally noticed that she watching him write, that notebook was never seen in class again.
            </p>
        </>
    )
}