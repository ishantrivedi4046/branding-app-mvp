import withScrollObserver from 'hoc/withScrollObserver';
import React from 'react';
import '../../styles/component/landing-page/qnaComponent.styles.scss';

const QNAComponent: React.FC = () => (
  <div className='qna-container' id='qna-container'>
    <div className='row'>RUME is a tool that simplifies the</div>
    <div className='row'>
      networking process between <span className='peel-text-1'>Brands</span>
    </div>
    <div className='row'>
      and <span className='peel-text-2'>Influencers</span> by giving each group
    </div>
    <div className='row'>direct exposure to each other.</div>
  </div>
);

export default React.memo(withScrollObserver(QNAComponent));
