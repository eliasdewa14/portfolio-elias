import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Home = () => {
  return (
    <section id='home'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 justify-between sm:flex-row lg:gap-16">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
	);
}

export default Home