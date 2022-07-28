import { CameraNode } from "./InputNodes/CameraNode";
import { ArithmaticNode } from "./MathNodes/ArithmaticNode";
import { CreateVectorNode } from "./MathNodes/CreateVectorNode";
import { DecomposeVectorNode } from "./MathNodes/DecomposeVector";
import { NormalizeVectorNode } from "./MathNodes/NormalizeVectorNode";
import { VectorNode } from "./MathNodes/VectorNode";
import { DisplayNode } from "./SimpleNodes/DisplayNode";
import { SplitterNode } from "./SimpleNodes/SplitterNode";

export const AllNodes = [
    CameraNode,
    ArithmaticNode,
    VectorNode,
    DisplayNode,
    SplitterNode,
    NormalizeVectorNode,
    CreateVectorNode,
    DecomposeVectorNode,
]