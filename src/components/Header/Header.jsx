import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 max-w-6xl mx-auto border-b-2'>
            <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
            <img className='' src={profile} alt="" />
        </header>
    );
};

export default Header;