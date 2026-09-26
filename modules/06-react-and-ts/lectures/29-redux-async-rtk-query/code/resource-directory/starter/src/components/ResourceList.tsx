import type { Resource } from "../types/resource";
type Props = { resources: Resource[] };
function ResourceList({ resources }: Props) {
  return <ul className="item-list">{resources.map((resource) => (
    <li className="item-card" key={resource.id}><strong>{resource.title}</strong><span className="badge">{resource.category}</span></li>
  ))}</ul>;
}
export default ResourceList;
