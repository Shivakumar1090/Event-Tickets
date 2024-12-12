import HomeBg from "../../Assets/bg1.jpg";

const container1 = {
  display: 'flex',
  minHeight: '50vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: "#fff",
  width: '500px',
  borderRadius: '30px',
}

const container2 = {
  display: 'flex',
  minHeight: '60vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: "#fff",
  width: '500px',
  borderRadius: '30px',
}


const container = {
  position: 'relative',
  display: 'flex',
  minHeight: '91vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${HomeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
}

const form = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}


const heading = {
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: '30px',
};

const input = {
  margin: "10px 0px 10px 0px",
  width: "100%",
  color: "#000",
  border: "1px solid #000",
  borderRadius: "5px",
  padding: "6px",
};


export {container,heading,input,form,container1,container2};