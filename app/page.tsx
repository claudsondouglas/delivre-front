import Link from "next/link";

export default async function Home() {
    const producs = await getData();

    return (
        <div className="min-h-screen">
            <nav className="bg-gray-200 py-5 border-b-2 border-gray-300 flex justify-center text-gray-800">
                <svg className="h-[38px]" viewBox="0 0 755 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.600098 105C0.600098 93.5334 2.73343 83.4667 7.0001 74.8001C11.4001 66.1334 17.3334 59.4667 24.8001 54.8001C32.2668 50.1334 40.6001 47.8001 49.8001 47.8001C57.1334 47.8001 63.8001 49.3334 69.8001 52.4001C75.9334 55.4667 80.7334 59.6001 84.2001 64.8001V13.0001H118.4V161H84.2001V145C81.0001 150.333 76.4001 154.6 70.4001 157.8C64.5334 161 57.6668 162.6 49.8001 162.6C40.6001 162.6 32.2668 160.267 24.8001 155.6C17.3334 150.8 11.4001 144.067 7.0001 135.4C2.73343 126.6 0.600098 116.467 0.600098 105ZM84.2001 105.2C84.2001 96.6667 81.8001 89.9334 77.0001 85.0001C72.3334 80.0667 66.6001 77.6001 59.8001 77.6001C53.0001 77.6001 47.2001 80.0667 42.4001 85.0001C37.7334 89.8001 35.4001 96.4667 35.4001 105C35.4001 113.533 37.7334 120.333 42.4001 125.4C47.2001 130.333 53.0001 132.8 59.8001 132.8C66.6001 132.8 72.3334 130.333 77.0001 125.4C81.8001 120.467 84.2001 113.733 84.2001 105.2Z" className="fill-current" />
                    <path d="M248.342 103.4C248.342 106.6 248.142 109.933 247.742 113.4H170.342C170.876 120.333 173.076 125.667 176.942 129.4C180.942 133 185.809 134.8 191.542 134.8C200.076 134.8 206.009 131.2 209.342 124H245.742C243.876 131.333 240.476 137.933 235.542 143.8C230.742 149.667 224.676 154.267 217.342 157.6C210.009 160.933 201.809 162.6 192.742 162.6C181.809 162.6 172.076 160.267 163.542 155.6C155.009 150.933 148.342 144.267 143.542 135.6C138.742 126.933 136.342 116.8 136.342 105.2C136.342 93.6001 138.676 83.4667 143.342 74.8001C148.142 66.1334 154.809 59.4667 163.342 54.8001C171.876 50.1334 181.676 47.8001 192.742 47.8001C203.542 47.8001 213.142 50.0667 221.542 54.6001C229.942 59.1334 236.476 65.6001 241.142 74.0001C245.942 82.4001 248.342 92.2001 248.342 103.4ZM213.342 94.4001C213.342 88.5334 211.342 83.8667 207.342 80.4001C203.342 76.9334 198.342 75.2001 192.342 75.2001C186.609 75.2001 181.742 76.8667 177.742 80.2001C173.876 83.5334 171.476 88.2667 170.542 94.4001H213.342Z" className="fill-current" />
                    <path d="M300.584 13.0001V161H266.384V13.0001H300.584Z" className="fill-current" />
                    <path d="M342.569 37.8C336.569 37.8 331.636 36.0667 327.769 32.6001C324.036 29.0001 322.169 24.6001 322.169 19.4001C322.169 14.0667 324.036 9.66672 327.769 6.20005C331.636 2.60005 336.569 0.800049 342.569 0.800049C348.436 0.800049 353.236 2.60005 356.969 6.20005C360.836 9.66672 362.769 14.0667 362.769 19.4001C362.769 24.6001 360.836 29.0001 356.969 32.6001C353.236 36.0667 348.436 37.8 342.569 37.8ZM359.569 49.4001V161H325.369V49.4001H359.569Z" className="fill-current" />
                    <path d="M434.553 129L458.753 49.4001H495.153L455.553 161H413.353L373.753 49.4001H410.353L434.553 129Z" className="fill-current" />
                    <path d="M543.749 68.0001C547.749 61.8667 552.749 57.0667 558.749 53.6001C564.749 50.0001 571.415 48.2001 578.749 48.2001V84.4001H569.349C560.815 84.4001 554.415 86.2667 550.149 90.0001C545.882 93.6001 543.749 100 543.749 109.2V161H509.549V49.4001H543.749V68.0001Z" className="fill-current" />
                    <path d="M700.295 103.4C700.295 106.6 700.095 109.933 699.695 113.4H622.295C622.829 120.333 625.029 125.667 628.895 129.4C632.895 133 637.762 134.8 643.495 134.8C652.029 134.8 657.962 131.2 661.295 124H697.695C695.829 131.333 692.429 137.933 687.495 143.8C682.695 149.667 676.629 154.267 669.295 157.6C661.962 160.933 653.762 162.6 644.695 162.6C633.762 162.6 624.029 160.267 615.495 155.6C606.962 150.933 600.295 144.267 595.495 135.6C590.695 126.933 588.295 116.8 588.295 105.2C588.295 93.6001 590.629 83.4667 595.295 74.8001C600.095 66.1334 606.762 59.4667 615.295 54.8001C623.829 50.1334 633.629 47.8001 644.695 47.8001C655.495 47.8001 665.095 50.0667 673.495 54.6001C681.895 59.1334 688.429 65.6001 693.095 74.0001C697.895 82.4001 700.295 92.2001 700.295 103.4ZM665.295 94.4001C665.295 88.5334 663.295 83.8667 659.295 80.4001C655.295 76.9334 650.295 75.2001 644.295 75.2001C638.562 75.2001 633.695 76.8667 629.695 80.2001C625.829 83.5334 623.429 88.2667 622.495 94.4001H665.295Z" className="fill-current" />
                    <path d="M734.338 162.6C728.338 162.6 723.404 160.867 719.538 157.4C715.804 153.8 713.938 149.4 713.938 144.2C713.938 138.867 715.804 134.4 719.538 130.8C723.404 127.2 728.338 125.4 734.338 125.4C740.204 125.4 745.004 127.2 748.738 130.8C752.604 134.4 754.538 138.867 754.538 144.2C754.538 149.4 752.604 153.8 748.738 157.4C745.004 160.867 740.204 162.6 734.338 162.6Z" className="fill-current" />
                </svg>
            </nav>
            <header className="py-3 bg-gray-200 text-gray-800 h-[700px] flex flex-col justify-center">
                <div className="max-w-screen-xl mx-auto px-10 lg:px-0 w-full">
                    <div className="max-w-2xl">
                        <span className="font-bold text-3xl lg:text-5xl">Não <span className="bg-gray-500 text-white">perca vendas</span> por não atender rapidamente os seus clientes.</span>
                        <p className="mt-2 text-lg lg:text-xl">Nosso sistema agiliza o processo, permitindo que os clientes enviem pedidos detalhados, eliminando a necessidade de anotar tudo manualmente. Não perca mais tempo e venda com eficiência.
                        </p>
                        <a className="bg-gray-500 text-lg text-white p-4 px-5 lg:px-10 block md:inline-block text-center mt-10 border-b-8 border-gray-700">Não quero mais perder vendas</a>
                    </div>
                </div>
            </header>

            <div className="max-w-screen-xl mx-auto pb-20 py-20 px-10 lg:px-0">
                <h2 className="text-3xl font-bold">Veja alguns exemplos de uso</h2>

                <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-10">
                    {
                        producs.map((product: any, index: number) => (
                            <Link key={index} href={`/${product.slug}`}>
                                <div className="">
                                    <img src={product.profile.profilePicture} alt={product.name} className="rounded-md" />

                                    <strong className="mt-2 block">
                                        {product.name}
                                    </strong>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <footer className="bg-gray-100">
                <div className="max-w-screen-xl mx-auto py-10 px-10 lg:px-0">
                    &copy; {new Date().getFullYear()} delivre - Nenhum dos direitos foram reservados. <br />
                    Feito com ❤ e ☕ por <a href="https://github.com/claudsondouglas" className="underline">claudson.dev</a>
                </div>
            </footer>
        </div>
    )
}

async function getData() {
    const res = await fetch(`${process.env.API_URL}/user`, {
        cache: 'no-store',
        next: {
            revalidate: 100,
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}