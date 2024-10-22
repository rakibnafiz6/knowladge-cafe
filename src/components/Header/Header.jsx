import profile from '../../assets/profile.jpg'
const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
            <img className='w-10 h-10 object-cover rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;