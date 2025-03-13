import { SectionTitle } from "../components/SectionTitle";

export function CompanyPage() {
    return (
        <section className="min-h-screen pt-[3.5rem] px-6 md:px-12 lg:px-20 py-10 bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
                <SectionTitle text={"Company Info"} />
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
                
                <p className="text-gray-600 mb-4">
                    To carry on the business of contractors, sub-contractors, quasi contractors and to undertake contracts and 
                    subcontracts relating to construction, modification, conversion, removal, redecoration, redesigning, enlarging, 
                    improving, and designing of civil work.
                </p>
                
                <p className="text-gray-600 mb-4">
                    Our expertise extends to the construction of buildings for various uses, roads, approach roads, streets, circles, 
                    squares, parks, gardens, statues, parking places, bridges, dams, watercourses, reservoirs, tunnels, earthworks, 
                    sewers, tanks, drains, sewage systems, lighthouses, towers, transmission towers, pipelines, underground cables, 
                    railway tracks, railway sidings, runways, shipyards, stockyards, culverts, and channels.
                </p>
                
                <p className="text-gray-600">
                    We undertake projects on a turnkey basis or through labor contracts and other arrangements.
                </p>
            </div>
        </section>
    );
}
