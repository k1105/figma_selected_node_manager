// This is a counter widget with buttons to increment and decrement the number.
import { NodeRow } from "./components/NodeRow";
import { LoadTrigger } from "./components/LoadTrigger";

const { widget } = figma;
const { useSyncedState, AutoLayout } = widget;

function SelectedNodeManager() {
  const [registeredNodes, setRegisteredNodes] = useSyncedState<
    {
      id: string;
      name: string;
      boundingBox: { width: number; height: number };
    }[]
  >("registeredNodes", []);

  return (
    <AutoLayout
      name="NodeContainer"
      fill="#FFF"
      direction="vertical"
      spacing={10}
      padding={50}
    >
      {registeredNodes.length == 0 ? (
        <LoadTrigger setRegisteredNodes={setRegisteredNodes} />
      ) : (
        (() => {
          const rows = [];
          for (const node of registeredNodes) {
            rows.push(
              <NodeRow
                name={node.name}
                width={node.boundingBox.width}
                height={node.boundingBox.height}
              />
            );
          }
          return rows;
        })()
      )}
    </AutoLayout>
  );
}
widget.register(SelectedNodeManager);
