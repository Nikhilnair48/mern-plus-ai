import ReviewActions from "./ReviewActions";

/*
  1. Create the handler
  2. Pass the handler as a prop to the child
*/
function ReviewPage() {
  const documentId = "DOC-481";

  function handleApprove(id: string) {
    console.log("Approved ID: " + id);
  }

  return (
    <main className="page">
      <section className="shell">
        <p className="eyebrow">Document review</p>
        <h1>Approval queue</h1>
        <p className="intro">Review the document details before approving the current item.</p>

        <article className="panel review-card">
          <h2>Vendor onboarding form</h2>

          <div className="review-meta">
            <div className="meta-item">
              <p className="meta-label">Document ID</p>
              <p className="meta-value">{documentId}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">Status</p>
              <p className="meta-value">Ready for review</p>
            </div>
          </div>

          <ReviewActions documentId={documentId} onApprove={handleApprove} />
        </article>
      </section>
    </main>
  );
}

export default ReviewPage;
