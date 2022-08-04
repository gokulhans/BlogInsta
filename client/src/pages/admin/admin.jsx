import React from 'react'

const AdminPage = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <>
            <div className="App">
                    <p style={{ color: "lighrgreen", fontSize: 20 }}>{!data ? "Loading..." : data}</p>
            </div>
        </>
    );
}

export default AdminPage