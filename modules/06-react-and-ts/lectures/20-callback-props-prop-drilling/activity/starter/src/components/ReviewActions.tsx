import ApproveButton from "./ApproveButton";
/*
  1. Update ReviewActionsProps
  2. Destructure the prop
  3. Pass the prop down to the child
*/

type ReviewActionsProps = {
  documentId: string;
  onApprove: (documentId: string) => void;
};

function ReviewActions({ documentId, onApprove }: ReviewActionsProps) {
  return (
    <div className="review-actions">
      <p className="muted">Ready to approve {documentId}</p>
      <ApproveButton documentId={documentId} onApprove={onApprove} />
    </div>
  );
}

export default ReviewActions;
