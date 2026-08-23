type ApproveButtonProps = {
  documentId: string;
  onApprove: (documentId: string) => void;
};

function ApproveButton({ documentId, onApprove }: ApproveButtonProps) {
  // onClick = we need to pass the documentId to the parent
  // we will invoke a function to do so
  // callback prop will help us achieve this
  return (
    <button className="button" aria-label={`Approve ${documentId}`}
      onClick={() => onApprove(documentId)}>
      Approve
    </button>
  );
}

export default ApproveButton;
