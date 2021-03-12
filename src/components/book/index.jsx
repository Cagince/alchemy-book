import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { makeMagicCircle } from './generator';
import './lorem'

import NothingAndAll from '../../media/nothing-and-all.png'
import piercing_the_veil from '../../media/piercing_the_veil.jpg'
import alchemy_of_babaylan from '../../media/alchemy_of_babaylan.webp'




const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            {props.children}
        </div>
    );
});


const Cover = React.forwardRef((props, ref) => {
    const className = props.className ? `page cover ${props.className}` : 'page cover';
    return (
        <div ref={ref} className={className}>
            <div className="logo"></div>
        </div>
    );
});

export function Book(props) {

  return (
      <div className="book-wrapper">
        <HTMLFlipBook 
            width={800} 
            height={1000}
            maxShadowOpacity={0.4}
            showCover={true}
        >
            <Cover />

            <Page> 
               <img className="with-border" src={NothingAndAll}  />
            </Page>

            <Page>
                <div className="page-content-wrapper">
                    <div className="spacer" />
                    <div>
                        <br />
                        <span className="caps">D</span> <i>uring the Early Modern Period the world was undergoing a major transition from a geocentric to a heliocentric cosmogony; from an occult and animistic landscape to a mechanistic and reductionist one defined by mechanistic processes that operated independently of any conscious and creative force. The indeterminate space left vacant between Copernican limelight and the Newtonian sunrise was quickly filled by the speculative and metaphysical vision of Jacob Boehme (1575-1624), a German cobbler who integrated streams of Hermetic, Renaissance Neo-platonic, alchemical, mystical, Christian, and early scientific thought to create a Weltanschauung (a comprehensive view of the world)</i>
                        <br />
                        <b>Alchemy in Jacob Boehme’s Theosophy | Down the Rabbit Hole</b>
                    </div>
                    <div className="spacer" />
                </div>
            </Page>

            <Page>
                <div className="page-content-wrapper">

                <div className="spacer" />
                <div className="text-right">
                    <b>What is Alchemist?</b> | <a href="https://alchemist.wtf">alchemist.wtf</a>
                    <br />

                    Alchemist was started with a tweet by <a href="">@thegostep</a>.
                    <br />

                    There is no “dev team”. There is no company. There is only a community of alchemists figuring out what to build in the open.
                    <br />

                    There is no roadmap. An alchemist never makes forward looking statements, simply because the future is unpredictable.
                    <br />

                    The only plan is there is no plan ⚗️
                    <br />
                    <br />
                </div>
                <div>

                    <span className="caps">B</span>ecoming an alchemist requires learning and practice. Training is a way of life for a true alchemist. There is no final destination, only continuous change.

                    ⚗️ is used to coordinate and reward committed alchemists. Whether you are an artist, a developer, a community manager, or a liquidity provider, there is a role for you.
                    <br />

                    Come meet the other alchemists at discord.achemist.wtf and offer your skills.
                    <br />
                    <b>Is there a website?</b>
                    <br />
                    Not yet. If you are interested in helping build one, check out the front-end channel.
                </div>
                </div>
            </Page>
            <Page>
                <img className="with-border" src={alchemy_of_babaylan} />
            </Page>
            <Page>
                <img className="span" src={piercing_the_veil} />

                <b>Where can I trade ⚗️ ($MIST) ?</b>
                <br />
                uniswap.alchemist.wtf

                <br />
                <b>What is total/circulating supply?</b>
                <br />
                Total and circulating supply are the same. This started with 1,000,000, but increases by 1% every two weeks.
                <br />

                <b>Do you plan pre/private/public sale?</b>
                <br />
                There are no sales. We held an initial Balancer pool and all ETH raised were deposited in the reward program.
                <br />

                <b>Does the token have inflation?</b>
                <br />
                Inflation is currently 1% every two weeks but can be modified up or down. To avoid being diluted by inflation, stake your ⚗️ in the reward program.
                <br />
            </Page>
            <Page>
                <span className="caps">A</span> liquidity provider reward program has been deployed for the ⚗️/ETH Uniswap pool. This reward program is called the Aludel.
                <br />
                A community multisig has been created to accumulate funds that can be used for bounties. Take a look at the bounties channel on discord or donate to the multisig at multisig.alchemistcoin.eth.
                <br />

                <b> Multisig FAQ</b>
                <br/>
                <b>Who are the multisig key holders?</b>
                <br/>
                Multisig holders are chosen by the community based on trust and contributions.

                <br/>
                Current multisig signers are:
                <br/>

                @ees2oo : stussy.eth,
                @sal_ash_ : salash.eth,
                @lucascerro : lucascerro.eth,
                @Fiskantes : fiskantes.eth,
                @0xMaki : 0xmaki.eth,


                <b>Aludel/Crucible FAQ</b>
                <br />
                <b>How do I participate in the Aludel / How do I mint a Crucible NFT?</b>
                <br />
                To participate in the Aludel, you must mint a Crucible NFT and deposit the ⚗️/ETH Uniswap LP tokens. The Crucible then accrues rewards from the Aludel program proportional to the amount and duration of LP token stake.
                You can follow this step-by-step guide.
                <br />

                <b>What are the rewards for staking in the Aludel?</b>
                <br />
                Rewards are distributed from the reward pool proportionally to the amount and duration of a stake.
                <br />

                You can see the reward pool here.
                <br />
            </Page>
            <Page>
                <div className="page-content-wrapper">
                    <div className="spacer" />

                    <div>
                        How do I claim the rewards?
                        <br />
                        All rewards are received when you unstake. Be careful, unstaking also resets your reward multiplier. If you use the unstake-and-claim CLI, be sure to use the --private tag to avoid frontrunners.
                        <br />

                        <b>Is it possible to use a mnemonic not generated by the script?</b>
                        <br />
                        Yes. You can use any valid mnemonic
                        <br />

                        <b>Does it matter how many LP tokens go into the crucible?</b>
                        <br />
                        The more LP tokens you get the higher amount of liquidity you provided therefore the larger percentage of the rewards pool you receive.
                        <br />

                        How to transfer an LP token to the generated address?
                        <br />
                        <a href="https://discord.com/channels/812035504869998644/812288587411881984/818130687269666836"> follow the link</a>
                        <br />

                        Can I somehow see how much rewards I have acquired in the meantime?
                        <br />
                        Not at this time unfortunately
                        <br />

                        Can I transfer the Crucible NFT to another wallet?
                        <br />
                        Yes, the ownership of the NFT (and the staked lp tokens) can be transferred to any ERC721 compatible wallet.
                        <br />
                    </div>
                </div>
            </Page>

            <Page>

            </Page>


            <Cover className="back" />


          {/* <div className="page cover">Page 19</div> */}
        </HTMLFlipBook>
      </div>
  );
}


