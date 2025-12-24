import  '../styles/footer.css';

export default function Footer() {
    return (
        <div className='title'>
            <h1>Dari <span className='ide'>Ide</span> <br /> Sampai <span className='jadi'>Jadi!</span></h1>
            <p>Tunggu apalagi? Langsung aja</p>
            <div className='buttons'>
                <a
                href="https://wa.me/6285640242954"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact"
                >
                Hubungi Kami
                </a>
            </div>
        </div>
    );
}
