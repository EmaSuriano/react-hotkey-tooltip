import HotkeyWrapper from '../../src';
import React, { Component } from 'react';
import ComplexButton from './ComplexButton';
import HighlightableText from './HighlightableText';

export default class Menu1 extends Component {
  render() {
    return (
      <div className="Home">
        <p>
          Duis exercitation officia consectetur et id sint consectetur. Non
          proident ut eu reprehenderit enim et. Sunt laborum consectetur
          deserunt ipsum. Ad sunt deserunt adipisicing excepteur enim ad
          excepteur dolore dolore veniam consectetur enim. Occaecat Lorem
          excepteur duis culpa irure commodo anim cupidatat quis sunt. Anim
          tempor eiusmod elit nisi enim velit officia sint nostrud. Consectetur
          aute voluptate sint in ullamco occaecat aute sunt commodo et velit id
          non in. Pariatur excepteur fugiat sit culpa sint pariatur. Est eu
          tempor fugiat ut minim id cupidatat sit aliquip sit ut. Excepteur amet
          do labore nostrud in aliquip tempor do. Fugiat commodo sint veniam
          ullamco in ullamco nostrud non officia culpa. Occaecat veniam est
        </p>
        <HotkeyWrapper
          shortcut="a"
          onShortcutPressed={() => this.button1.focus()}
          disableTooltip
        >
          <button
            onClick={() => console.log('click button1')}
            ref={c => (this.button1 = c)}
          >
            Button 1
          </button>
        </HotkeyWrapper>

        <HotkeyWrapper
          shortcut="s"
          onShortcutPressed={() => this.complexButton.focus()}
          tooltipProps={{
            arrow: false,
            theme: 'light',
          }}
        >
          <ComplexButton
            onClick={() => console.log('Clicking complex button')}
            ref={c => (this.complexButton = c)}
          />
        </HotkeyWrapper>
        <HotkeyWrapper shortcut="p" onShortcutPressed="focus">
          <HighlightableText />
        </HotkeyWrapper>
        <HotkeyWrapper shortcut="b" onShortcutPressed="focus">
          <button onClick={() => console.log('click button 2')}>
            Button 2
          </button>
        </HotkeyWrapper>
        <HotkeyWrapper shortcut="i" onShortcutPressed="focus">
          <input type="text" />
        </HotkeyWrapper>
        <p>
          Id exercitation esse magna irure ipsum consequat aliquip ea sunt
          consectetur aliqua amet. Excepteur deserunt cillum voluptate pariatur
          ullamco et fugiat nulla Lorem id magna laboris. Consectetur officia id
          ex laborum eu sunt duis exercitation laboris qui velit esse ad.
          Eiusmod culpa quis sint do id culpa excepteur duis tempor occaecat.
          Commodo nostrud non adipisicing veniam labore voluptate fugiat culpa.
          Velit ullamco sunt voluptate sit nulla culpa adipisicing labore
          pariatur ut veniam. Eiusmod sit fugiat amet dolor. Laboris sit cillum
          veniam commodo. Laboris sit minim aliquip irure laboris fugiat aliquip
          ad ut proident enim fugiat. Magna mollit id dolore eu culpa
          reprehenderit consequat mollit elit non. Dolor est quis cillum
          consectetur excepteur nisi. Fugiat consequat pariatur nostrud occaecat
          qui quis proident enim anim ea nulla amet elit ea. Ad irure id
          adipisicing excepteur incididunt ea nisi sunt fugiat deserunt nostrud
          cillum cillum. Aliquip labore proident nulla voluptate aliquip magna
          nostrud excepteur labore enim exercitation dolor laboris veniam. Eu
          dolore enim eu est est consequat sit id ullamco Lorem officia Lorem.
          Incididunt commodo duis ipsum sit id ullamco magna elit. Sint quis
          consequat esse est pariatur adipisicing reprehenderit consequat.
          Cillum ex exercitation nostrud eu duis amet aliqua pariatur. Non
          labore consequat ex voluptate officia. Incididunt esse culpa aliquip
          non pariatur amet cillum tempor elit consectetur nostrud pariatur
          irure. Est officia Lorem labore minim incididunt aute mollit enim
          exercitation est. Voluptate consequat excepteur nostrud anim excepteur
          do amet labore. Fugiat culpa quis do esse ex in voluptate do
          reprehenderit aliqua veniam tempor non duis. Et nostrud exercitation
          eiusmod deserunt ipsum sunt incididunt exercitation pariatur veniam
          minim anim adipisicing. Incididunt reprehenderit aliqua esse laboris
          irure sit adipisicing ullamco adipisicing id mollit ut elit. Cillum
          velit duis commodo esse do veniam velit esse nulla proident occaecat
          anim proident tempor. Laborum duis consectetur irure laborum qui
          voluptate laboris est officia exercitation est mollit. Ullamco nisi
          eiusmod veniam exercitation eiusmod. Ea enim occaecat sunt cillum.
          Voluptate adipisicing quis esse aliquip nulla exercitation veniam
          officia voluptate incididunt veniam cillum sunt culpa. Quis qui enim
          eu cillum laboris qui cupidatat laboris anim elit id duis irure.
          Deserunt in ipsum irure minim cillum qui duis proident ea Lorem tempor
          sunt reprehenderit adipisicing. Qui laboris deserunt ullamco non
          cupidatat commodo eu sint minim quis sunt ipsum aliquip id. Non sit
          consectetur Lorem sint mollit aliquip enim aute Lorem tempor ea
          adipisicing est. Culpa nostrud sit culpa sint amet Lorem aliqua sunt
          proident culpa voluptate. Quis cillum velit aute occaecat adipisicing
          velit mollit occaecat veniam id ipsum cupidatat dolor. Do ex cupidatat
          quis deserunt aute dolore mollit id. Ex amet sunt laboris officia enim
          qui magna. Laborum voluptate pariatur excepteur occaecat nostrud
          cupidatat. Nostrud veniam ad laborum labore labore eu aute nostrud
          reprehenderit tempor et. Quis aliquip anim dolor id amet sit culpa
          irure. Aliqua mollit exercitation et sit. Exercitation ea mollit
          deserunt non. Id sint quis culpa consequat velit commodo eu dolor
          voluptate id et. Adipisicing ad labore exercitation non.
        </p>
      </div>
    );
  }
}
