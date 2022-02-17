import RelatedDoc from '../HelpDesk/Community/RelatedDoc/RelatedDoc'
import CompleteWork from '../HelpDesk/Community/CompleteWork/CompleteWork'
import CommunityPost from '../HelpDesk/Community/CommunityPost/CommunityPost'
import CeoTalk from './Community/CeoTalk/CeoTalk';
import SearchCommunity from './Community/SearchCommunity/SearchCommunity';
import CommunityBanner from './Community/CommunityBanner/CommunityBanner';
// import Footer from '../Shared/Footer/Footer'

const HelpDex = () => {
  return (
    <div className="">
       <CommunityBanner/>
       <RelatedDoc/>
       <CompleteWork/>
       <CommunityPost/>
       <CeoTalk/>
       <SearchCommunity/>
       {/* <Footer/> */}
    </div>
  );
}

export default HelpDex;