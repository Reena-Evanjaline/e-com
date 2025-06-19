import React from 'react';

function Banner2() {
    return (
        <>
            <div
                className="container-fluid"
                style={{
                    backgroundImage: `url("/images/banner-2.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Vertically center
                    alignItems: 'center',     // Horizontally center
                    color: 'white',
                    textAlign: 'center',
                    padding: '2rem',          // Add spacing
                }}
            >
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{ color: '#e0ac00', fontSize: "42px" }}>Why Optical Transceivers Matter In 2025</h1>
                    <p style={{ textAlign: 'justify', fontSize: "16px" }}>
                        As data demand skyrockets, businesses in telecom, enterprise IT, and data centers face increasing pressure to scale bandwidth efficiently. Whether you're upgrading switches, expanding networks, or building a hyperscale infrastructure, optical transceivers are at the heart of connectivity.
                    </p>
                </div>
            </div>
            <div className='container mt-5'>
                <div className="row g-4 mt-4">
                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-white rounded text-dark h-100">
                            <h4>Media</h4>
                            <p>
                                Supporting Livestreaming events such as Fifa in the last world Cup in Qatar, our transceivers have been tested in some of the most high-profile use case scenarios in highly mission-critical network cases as spares for VVIP clients where every moment of uptime is crucial.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-white rounded text-dark h-100">
                            <h4>Legal Sector</h4>
                            <p>
                                Judiciary Governmental departments have been using our OEM MPO and QSFPs within the region for almost 2 years with zero complaints. These have been instrumental in success in highly sensitive customer profiles and securing key wins in challenging accounts.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-white rounded text-dark h-100">
                            <h4>Telco</h4>
                            <p>
                                Several Telcos and ISPs across multiple countries in the territory have adopted using OEM and compatible transceivers in their core and legacy networks. Their growing confidence reduces CapEx while trusting a reliable local vendor with ground support.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container mt-5'>
                <div className="row g-4 ">
                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-primary rounded text-white h-100">
                            <h4>Smart City</h4>
                            <p>
                                When your Vendor is unreliable and unable to deliver Optical Transceivers to work with their own brand of equipment, don't worry. We have always got a work around that will work to suit your network, we have a solution for Cisco, Nutanix, 25Gb, 40Gb and more.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-primary rounded text-white h-100">
                            <h4>Systems Integrators</h4>
                            <p>
                                Are you a forward thinking Systems Integrator, looking to collaborate and win more deals whilst remaining a strategic consultant and trusted advisor to your clients? Do you always check with your customer before providing them with an alternative solution or do you burden any additional cost? We're here to help you manage without insane over heads of missing equipment.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-primary rounded text-white h-100">
                            <h4>Public Sector</h4>
                            <p>
                                You'd be surprised if you knew which end customers have strict legal standard to adhere to but understand that the main brand vendors do not produce their own transceivers. Are you being forced into buying your Accessories from your pushy account manager? Have you ever considered why that might be?
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default Banner2;
