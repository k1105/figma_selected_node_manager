const { widget } = figma;
const { AutoLayout, Text } = widget;

import { getScaleToFitContainer } from "../../lib/getScaleToFitContainer";

export const LoadTrigger = ({
  setRegisteredNodes,
}: {
  setRegisteredNodes: (
    newValue:
      | {
          id: string;
          name: string;
          boundingBox: {
            width: number;
            height: number;
          };
        }[]
      | ((
          currValue: {
            id: string;
            name: string;
            boundingBox: {
              width: number;
              height: number;
            };
          }[]
        ) => {
          id: string;
          name: string;
          boundingBox: {
            width: number;
            height: number;
          };
        }[])
  ) => void;
}) => {
  return (
    <AutoLayout
      name="LoadTrigger"
      fill="#FFF"
      spacing={50}
      width={706}
      height={124}
      horizontalAlignItems="center"
      verticalAlignItems="center"
      onClick={() => {
        const selectedNodes = figma.currentPage.selection.concat(); //複製
        console.log(selectedNodes);
        const nodes: {
          id: string;
          name: string;
          boundingBox: { width: number; height: number };
        }[] = [];
        const originalBoundingBoxes: { width: number; height: number }[] = [];
        for (const node of selectedNodes) {
          originalBoundingBoxes.push({
            width: node.width,
            height: node.height,
          });
        }
        const scale = getScaleToFitContainer(originalBoundingBoxes, {
          width: 100,
          height: 80,
        });
        for (const node of selectedNodes) {
          nodes.push({
            id: node.id,
            name: node.name,
            boundingBox: {
              width: node.width * scale,
              height: node.height * scale,
            },
          });
        }
        setRegisteredNodes(nodes);
      }}
    >
      <Text
        name="+ Load Selected Element"
        fill="#000"
        width={518}
        height={62}
        verticalAlignText="center"
        horizontalAlignText="center"
        fontFamily="Inter"
        fontSize={18}
      >
        + Load Selected Element
      </Text>
    </AutoLayout>
  );
};
