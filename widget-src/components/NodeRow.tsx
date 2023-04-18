const { widget } = figma;
const { AutoLayout, Text, SVG, Rectangle } = widget;

type Props = {
  name: string;
  width: number;
  height: number;
};

export const NodeRow = ({ name, width, height }: Props) => {
  return (
    <AutoLayout
      name="Frame 6"
      fill="#FFF"
      spacing={50}
      height={124}
      verticalAlignItems="center"
    >
      <AutoLayout
        name="Frame 7"
        fill="#FFF"
        direction="vertical"
        spacing={10}
        padding={{
          vertical: 27,
          horizontal: 0,
        }}
        height="fill-parent"
        verticalAlignItems="center"
        horizontalAlignItems="center"
      >
        <Rectangle
          name="Rectangle 48"
          stroke="#000"
          width={width}
          height={height}
        />
      </AutoLayout>
      <Text
        name="Name"
        fill="#000"
        width={518}
        height={62}
        verticalAlignText="center"
        fontFamily="Inter"
        fontSize={18}
      >
        {name}
      </Text>
    </AutoLayout>
  );
};
