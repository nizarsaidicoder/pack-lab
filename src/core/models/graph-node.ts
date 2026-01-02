import type { GraphEdge } from './graph-edge'

export interface GraphNode
{
  id: string
  row: number
  col: number
  cost: number // Cost to enter this node, the edges are implied (Weight(nodeA, nodeB) = nodeB.cost)
  walkable: boolean
  edges: GraphEdge[]
}
