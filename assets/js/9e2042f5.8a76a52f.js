"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5651],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return o.createElement(s.Provider,{value:a},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(t),u=n,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return t?o.createElement(m,l(l({ref:a},d),{},{components:t})):o.createElement(m,l({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[h]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99476:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var o=t(87462),n=t(63366),r=(t(67294),t(3905)),l=["components"],i={id:"learn-collator",title:"Collator",sidebar_label:"Collator",description:"Role of Collators within the Polkadot Ecosystem.",keywords:["collator","maintain","full node","block candidate"],slug:"../learn-collator"},s=void 0,c={unversionedId:"learn/learn-collator",id:"learn/learn-collator",title:"Collator",description:"Role of Collators within the Polkadot Ecosystem.",source:"@site/../docs/learn/learn-collator.md",sourceDirName:"learn",slug:"/learn-collator",permalink:"/docs/learn-collator",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-collator.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"learn-collator",title:"Collator",sidebar_label:"Collator",description:"Role of Collators within the Polkadot Ecosystem.",keywords:["collator","maintain","full node","block candidate"],slug:"../learn-collator"},sidebar:"docs",previous:{title:"Network Participants",permalink:"/docs/learn-participants-index"},next:{title:"Nominator",permalink:"/docs/learn-nominator"}},d={},h=[{value:"Collators&#39; Role",id:"collators-role",level:2},{value:"XCM",id:"xcm",level:2},{value:"Taking the Case for One Parachain",id:"taking-the-case-for-one-parachain",level:2},{value:"Collators in the Wild",id:"collators-in-the-wild",level:2},{value:"Guides and Tools",id:"guides-and-tools",level:2}],p={toc:h},u="wrapper";function m(e){var a=e.components,i=(0,n.Z)(e,l);return(0,r.kt)(u,(0,o.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page provides a general overview of the role of collators' in\nPolkadot. For more detailed information you\ncan read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachain Protocol Overview"),".")),(0,r.kt)("h2",{id:"collators-role"},"Collators' Role"),(0,r.kt)("p",null,"Collators maintain parachains by collecting parachain transactions from users and producing state\ntransition proofs for Relay Chain validators. In other words, collators maintain parachains by\naggregating parachain transactions into parachain block candidates and producing state transition\nproofs (Proof-of-Validity, PoV) for validators."),(0,r.kt)("p",null,"Collators maintain a full node for the Relay Chain and a full node for their particular parachain;\nmeaning they retain all necessary information to be able to author new blocks and execute\ntransactions in much the same way as miners do on PoW blockchains. Under normal circumstances, they\nwill collate and execute transactions to create an unsealed block and provide it, together with a\nPoV, to one or more validators responsible for proposing a parachain block."),(0,r.kt)("p",null,"Collators are similar to validators on any other blockchain but they do not need to provide security\nguarantees because Polkadot provides those. If\na parachain block is invalid, it will get rejected by validators. The validators are required to\ncheck the validity of submitted candidates, followed by issuing and collecting statements about the\nvalidity of candidates to other validators. This process is known as ",(0,r.kt)("strong",{parentName:"p"},"candidate backing"),".\nValidators receive an arbitrary number of parachain candidates with associated PoV from untrusted\ncollators. A candidate is considered ",(0,r.kt)("em",{parentName:"p"},"backable")," when at least 2/3 of all assigned validators have\nissued a valid statement about that candidate."),(0,r.kt)("p",null,"The validator must successfully verify the following conditions in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The candidate does not exceed any parameters in the persisted validation data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The signature of the collator is valid.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate the candidate by executing the parachain Runtime."))),(0,r.kt)("p",null,"Once a candidate meets a specified criteria for inclusion, the selected relay chain block author\nthen chooses any of the backable candidates for each parachain and includes those into the relay\nchain block. We say the candidate blocks are ",(0,r.kt)("em",{parentName:"p"},"backed"),"."),(0,r.kt)("p",null,"The assumption that having more collators is better or more secure is not correct. On the contrary,\ntoo many collators may slow down the network. The only nefarious power collators have is transaction\ncensorship. To prevent censorship, a parachain only needs to ensure that there are some neutral\ncollators - but not necessarily a majority. Theoretically, the censorship problem is solved by\nhaving just one honest collator."),(0,r.kt)("h2",{id:"xcm"},"XCM"),(0,r.kt)("p",null,"Collators are a key element of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM (Cross-Consensus Message Passing Format)"),". By\nbeing full nodes of the Relay Chain, they are all aware of each other as peers. This makes it\npossible for them to send messages from parachain A to parachain B."),(0,r.kt)("h2",{id:"taking-the-case-for-one-parachain"},"Taking the Case for One Parachain"),(0,r.kt)("p",null,"A start of a new block candidate is initiated with a block creation time. The collator aggregates\nall new transactions at the end of the process. When doing so, the collator signs the ",(0,r.kt)("em",{parentName:"p"},"parachain\nblock candidate")," and produces state transition proofs (Proof-of-Validity, PoV), which are a summary\nof the final account balances caused by the transactions in the candidate block. The collator sends\nthe candidate block and PoV to the parachain validators, so-called para-validators. The\npara-validators verify the transactions within the parachain block candidate. Upon verification, and\nif all is well, the candidate becomes ",(0,r.kt)("em",{parentName:"p"},"backable")," and a para-validator shares the candidate block\nwith the relay chain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachain candidate block diagram",src:t(17529).Z,width:"413",height:"298"})),(0,r.kt)("p",null,"The validators on the relay chain will try to reach a consensus on the block candidate. Upon\nreaching consensus, the now validated block candidate is shared with the validators and collators,\nand the process repeats for new transactions. A collator cannot continue building blocks on a\nparachain until the block candidate they proposed to the Relay Chain validators have been validated.\nA block is produced every 6 seconds."),(0,r.kt)("h2",{id:"collators-in-the-wild"},"Collators in the Wild"),(0,r.kt)("p",null,"Blockchains that are built using Substrate are unable to hook onto the Relay Chain on their own. The\nParity team built the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus/"},"Cumulus library")," to address this.\nCollators are being used on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo")," testnet, and you can\nlearn more about how they are used with Cumulus via the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus/"},"Cumulus")," repository. More\ninformation can be found under the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk###cumulus"},"Cumulus section")," on the\nbuild parachain page."),(0,r.kt)("h2",{id:"guides-and-tools"},"Guides and Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/how-to-guides/parachains/connect-to-a-relay-chain/"},"Tutorial covering Cumulus and Collators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo testnet guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/shawntabrizi/polkadot-launch"},"polkadot-launch")," - a tool to quickly spin up a\nlocal Polkadot testnet based on some parameters like number of parachains, collator setup, etc.")))}m.isMDXComponent=!0},17529:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/polkadot-consensus-example-1-b4a05f2e5a4b991594612da57e1d6dfd.png"}}]);