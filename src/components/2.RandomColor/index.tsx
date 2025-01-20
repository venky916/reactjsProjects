import { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState<string>('rgb');
  const [color, setColor] = useState<string>('#000000');

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      let randIndex = Math.floor(Math.random() * 15);
      hexColor += hex[randIndex];
    }
    // console.log(hexColor)
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
    // console.log(color)
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') {
      handleCreateRandomRgbColor()
    } else {
      handleCreateRandomHexColor()
    }
  },[typeOfColor])


  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
        textAlign: 'center',
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random color
      </button>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',
        fontSize: "60px",
        marginTop:'50px'
      }}>
        <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX color"} { color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
