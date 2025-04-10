

const handleDelete = async () => {
    try {
        const confirm = window.confirm("Are you sure you want to delete this blog?");
        if (!confirm) return;

        await axios.delete(`http://localhost:9000/api/v1/delete/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        alert("Blog deleted successfully");
        navigate("/home");
    } catch (error) {
        console.error("Error deleting blog:", error.message);
        alert("Failed to delete blog");
    }
};
