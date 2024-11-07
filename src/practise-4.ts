{
  interface Circle {
    shape: 'circle';
    radius: number;
  }

  interface Rectangle {
    shape: 'rectangle';
    width: number;
    height: number;
  }

  type Area = Circle | Rectangle;

  const calculateShapeArea = (obj: Area): number => {
    if (obj.shape === 'circle') return Math.PI * obj.radius * obj.radius;
    else {
      return obj.width * obj.height;
    }
  };

  const rectangleArea = calculateShapeArea({
    shape: 'rectangle',
    width: 4,
    height: 6,
  });

  const circleArea = parseInt(
    calculateShapeArea({ shape: 'circle', radius: 5 }).toFixed(2)
  );
  console.log(circleArea);
  console.log(rectangleArea);
}
